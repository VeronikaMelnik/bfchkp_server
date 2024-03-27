import { Controller, Get, Post, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersAccessService } from './userAccess.service';
import { UserRoleGuard } from 'src/guards/user.guard';
import { TokenPayload } from 'src/types/token/token.types';
import { FileInterceptor } from '@nestjs/platform-express';
import { ONE_MB_IN_BYTES } from 'src/constants';

@ApiTags('Команды юзера')
@ApiBearerAuth()
@UseGuards(UserRoleGuard)
@Controller('api/me')
export class UsersAccessController {

  constructor(private userService: UsersAccessService) { }

  @ApiOperation({ summary: 'Данные юзера' })
  @ApiResponse({ status: 200 })
  @Get()
  getMe(@Req() { user }: { user: TokenPayload },) {
    return this.userService.getMe(user)
  }

  @ApiResponse({ status: 200 })
  @Post('/avatar')
  @UseInterceptors(
    FileInterceptor('file', {
      limits: { files: 1, fileSize: 4 * ONE_MB_IN_BYTES },
    }),
  )
  uploadImage(
    @UploadedFile() file: { buffer: Buffer },
    @Req() { user }: { user: TokenPayload },
  ) {
    return this.userService.uploadImage({ data: file.buffer, user });
  }
}
