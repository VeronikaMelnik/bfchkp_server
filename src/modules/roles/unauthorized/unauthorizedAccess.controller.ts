import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UnauthorizedAccessService } from './unauthorizedAccess.service';
import { Championship } from 'src/database';
import { IsAdmin } from 'src/guards/roles-auth.decorator';
import { CreateUserDto } from 'src/types/dto/user.dto';

@ApiTags('Команды неавторизованного юзера')
@Controller('api/')
export class UnauthorizedAccessController {

  constructor(private unauthorizedService: UnauthorizedAccessService) {}

  @ApiOperation({ summary: 'Авторизация юзера' })
  @Post('auth/login')
  login(@Body() userDto: CreateUserDto) {
    return this.unauthorizedService.login(userDto)
  }

  @ApiOperation({ summary: 'Регистрация нового юзера' })
  @Post('auth/registration')
  registration(@Body() userDto: CreateUserDto) {
    return this.unauthorizedService.registration(userDto)
  }

  @ApiOperation({ summary: 'Получение чемпионата' })
  @ApiResponse({ status: 200, type: [Championship] })
  @IsAdmin()
  @Get('/championship/:id')
  getAll(@Param('id') id: string) {
    return this.unauthorizedService.getChampionshipById(Number(id))
  }
}
