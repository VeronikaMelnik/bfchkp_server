import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../../../types/dto/user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UsersAccessService } from './userAccess.service';

@ApiTags('Команды юзера')
@Controller('api/auth')
export class UsersAccessController {

  constructor(private userService: UsersAccessService) {}

  @ApiOperation({ summary: 'Авторизация юзера' })
  @Post('/login')
  login(@Body() userDto: CreateUserDto) {
    return this.userService.login(userDto)
  }
}
