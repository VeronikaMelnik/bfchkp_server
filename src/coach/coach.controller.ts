import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IsAdmin } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { CoachesRepository } from './coach.repository';
import { Coach } from './coach.entity';
import { CreateCoachDto } from './dto/create-coach.dto';

@ApiTags('Судьи')
@Controller('coaches')
export class CoachesController {

  constructor(private coachRepository: CoachesRepository) {}

  @ApiOperation({ summary: 'Создание тренера' })
  @ApiResponse({ status: 200, type: Coach })
  @Post()
  create(@Body() coachDto: CreateCoachDto) {
    return this.coachRepository.create(coachDto);
  }

  @ApiOperation({ summary: 'Получение всех тренеров' })
  @ApiResponse({ status: 200, type: [Coach] })
  @IsAdmin()
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.coachRepository.getAll();
  }
}
