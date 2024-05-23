import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Coach } from '../../../database/entities/coach.entity';
import { CreateCoachDto } from '../../../types/dto/coach.dto';
import { CoachesAccessService } from './coachAccess.service';
import { CoachRoleGuard } from 'src/guards/coach.guard';

@ApiTags('Команды тренера')
@ApiBearerAuth()
@UseGuards(CoachRoleGuard)
@Controller('coaches')
export class CoachesAccessController {

  constructor(private coachService: CoachesAccessService) {}

  @ApiOperation({ summary: 'Создание тренера' })
  @ApiResponse({ status: 200, type: Coach })
  @Post()
  create(@Body() data: CreateCoachDto) {
    return this.coachService.create(data);
  }

  @ApiOperation({ summary: 'Получение всех тренеров' })
  @ApiResponse({ status: 200, type: [Coach] })
  @Get()
  getAllCoaches() {
    return this.coachService.getAllCoaches();
  }
}
