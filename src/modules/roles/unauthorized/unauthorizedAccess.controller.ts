import { Body, Controller, Get, Param, ParseIntPipe, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UnauthorizedAccessService } from './unauthorizedAccess.service';
import { Championship } from 'src/database';
import { CreateUserDto, LoginUserDto } from 'src/types/dto/user.dto';
import { Response } from 'express';

@ApiTags('Команды неавторизованного юзера')
@Controller('api/')
export class UnauthorizedAccessController {

  constructor(private unauthorizedService: UnauthorizedAccessService) { }

  @ApiOperation({ summary: 'Авторизация юзера' })
  @Post('auth/login')
  login(@Body() userDto: LoginUserDto) {
    return this.unauthorizedService.login(userDto)
  }

  @ApiOperation({ summary: 'Регистрация нового юзера' })
  @Post('auth/registration')
  registration(@Body() userDto: CreateUserDto) {
    return this.unauthorizedService.registration(userDto)
  }

  @ApiOperation({ summary: 'Получение чемпионата' })
  @ApiResponse({ status: 200, type: [Championship] })
  @Get('/championship/:id')
  getAll(@Param('id') id: string) {
    return this.unauthorizedService.getChampionshipById(Number(id))
  }

  @ApiOperation({
    summary: 'Get image data',
    description: 'Get characteristics for type',
  })
  @ApiTags('Images')
  @ApiResponse({ status: 200 })
  @Get('/images/:id')
  getCharacteristics(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    res.setHeader('Content-Type', 'image/jpeg');
    return this.unauthorizedService.getImage({ id, res });
  }
}
