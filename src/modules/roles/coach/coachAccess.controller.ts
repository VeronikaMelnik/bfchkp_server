import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Coach } from '../../../database/entities/coach.entity';
import { CreateCoachDto } from '../../../types/dto/coach.dto';
import { CoachesAccessService } from './coachAccess.service';
import { CoachRoleGuard } from 'src/guards/coach.guard';
import { Team } from 'src/database';
import { TeamsService } from 'src/modules/shared/team/team.service';

@ApiTags('Команды тренера')
@ApiBearerAuth()
@UseGuards(CoachRoleGuard)
@Controller('coaches')
export class CoachesAccessController {

  constructor(
    private coachService: CoachesAccessService,
    private teamService: TeamsService
  ) {}

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

  @ApiOperation({ summary: 'Получение всех команд' })
  @ApiResponse({ status: 200, type: [Team] })
  @Get('/teams')
  getAllTeams() {
    return this.teamService.getAllTeams();
  }
}
