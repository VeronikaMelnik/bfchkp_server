import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Coach } from '../../../database/entities/coach.entity';
import { CreateCoachDto } from '../../../types/dto/coach.dto';
import { CoachesAccessService } from './coachAccess.service';
import { CoachRoleGuard } from 'src/guards/coach.guard';

@ApiTags('Команды тренера')
@Controller('coaches')
export class CoachesAccessController {

  constructor(private coachService: CoachesAccessService) {}

  @ApiOperation({ summary: 'Создание тренера' })
  @ApiResponse({ status: 200, type: Coach })
  @UseGuards(CoachRoleGuard)
  @Post()
  create(@Body() data: CreateCoachDto) {
    return this.coachService.create(data);
  }
}
