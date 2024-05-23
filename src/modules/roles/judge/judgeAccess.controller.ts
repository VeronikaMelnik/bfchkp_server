import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Judge } from '../../../database/entities/judge.entity';
import { CreateJudgeDto } from '../../../types/dto/judge.dto';
import { JudgesAccessService } from './judgeAccess.service';
import { JudgeRoleGuard } from 'src/guards/judge.guard';
import { Result } from 'src/database';
import { ResultsService } from 'src/modules/shared/result/result.service';

@ApiTags('Команды судьи')
@ApiBearerAuth()
@UseGuards(JudgeRoleGuard)
@Controller('judges')
export class JudgesAccessController {

  constructor(
    private judgeService: JudgesAccessService,
    private resultService: ResultsService
  ) {}

  @ApiOperation({ summary: 'Создание судьи' })
  @ApiResponse({ status: 200, type: Judge })
  @Post()
  create(@Body() data: CreateJudgeDto) {
    return this.judgeService.create(data);
  }

  @ApiOperation({ summary: 'Получение всех судей' })
  @ApiResponse({ status: 200, type: [Judge] })
  @Get()
  getAllJudges() {
    return this.judgeService.getAllJudges();
  }

  @ApiOperation({ summary: 'Получение всех результатов соревнований' })
  @ApiResponse({ status: 200, type: [Result] })
  @Get('/results')
  getAllResults() {
    return this.resultService.getAllResults();
  }
}
