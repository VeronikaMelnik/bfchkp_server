import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreatePersonDto {
  @ApiProperty({ example: 'Вероника', description: 'Имя' })
  @IsString({ message: 'Должно быть строкой' })
  name?: string;

  @ApiProperty({ example: 'Мельник', description: 'Фамилия' })
  @IsString({ message: 'Должно быть строкой' })
  lastName?: string;

  @IsString({ message: 'Должно быть строкой' })
  image?: string;
}
