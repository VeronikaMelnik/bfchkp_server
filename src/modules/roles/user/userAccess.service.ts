import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { PersonsService } from "../../shared/person/person.service";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/modules/shared/user/user.service";
import { TokenPayload } from "src/types/token/token.types";
import { ImageService } from "src/modules/shared/image/image.service";

@Injectable()
export class UsersAccessService {

  constructor(
    private userService: UsersService,
    private personService: PersonsService,
    private imageService: ImageService,
    private jwtService: JwtService
  ) {}

  async getMe(user: TokenPayload) {
    try {
      return this.userService.getUserData(user.id)
    } catch (error) {
      Logger.error(`Get user id: ${user.id}`, 'User')
      throw new NotFoundException({ user, error });
    }
  }

  async uploadImage({ data, user }: UploadImageProps) {
    const person = await this.personService.findById(user.personId);
    if (!person) {
      Logger.warn('person not found', 'Person');
      throw new NotFoundException(`person with id: ${user.personId}`);
    }
    if (person.imageId) {
      const image = await this.imageService.updateImage({data, id: person.imageId, userId: user.id})
      return image.url
    } else {
      const filePath = `person/${user.personId}`;
      const image = await this.imageService.addImageToList({
        filePath,
        data,
        userId: user.id,
      });
      person.imageId = image.id
      await this.personService.update(person)
      return image.url
    }
  }
}

interface UploadImageProps {
  data: Buffer;
  user: TokenPayload
}
