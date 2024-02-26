import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../../../types/dto/user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UnauthorizedAccessService } from './unauthorizedAccess.service';

@ApiTags('Команды юзера')
@Controller('api/auth')
export class UnauthorizedAccessController {

  constructor(private userRepository: UnauthorizedAccessService) {}

  @ApiOperation({ summary: 'Авторизация юзера' })
  @Post('/login')
  login(@Body() userDto: CreateUserDto) {
    return this.userRepository.login(userDto)
  }

  @ApiOperation({ summary: 'Регистрация нового юзера' })
  @Post('/registration')
  registration(@Body() userDto: CreateUserDto) {
    return this.userRepository.registration(userDto)
  }
}
