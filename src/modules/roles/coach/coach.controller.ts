import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Coach } from '../../../database/entities/coach.entity';
import { CreateCoachDto } from '../../../types/dto/create-coach.dto';
import { CoachesService } from './coach.service';

@ApiTags('Команды тренера')
@Controller('coaches')
export class CoachesController {

  constructor(private coachService: CoachesService) {}

  @ApiOperation({ summary: 'Создание тренера' })
  @ApiResponse({ status: 200, type: Coach })
  @Post()
  create(@Body() data: CreateCoachDto) {
    return this.coachService.create(data);
  }
}
