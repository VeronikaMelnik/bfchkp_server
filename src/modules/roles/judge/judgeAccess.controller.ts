import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Judge } from '../../../database/entities/judge.entity';
import { CreateJudgeDto } from '../../../types/dto/judge.dto';
import { JudgesAccessService } from './judgeAccess.service';
import { JudgeRoleGuard } from 'src/guards/judge.guard';

@ApiTags('Команды судьи')
@ApiBearerAuth()
@UseGuards(JudgeRoleGuard)
@Controller('judges')
export class JudgesAccessController {

  constructor(private judgeService: JudgesAccessService) {}

  @ApiOperation({ summary: 'Создание судьи' })
  @ApiResponse({ status: 200, type: Judge })
  @Post()
  create(@Body() data: CreateJudgeDto) {
    return this.judgeService.create(data);
  }

  @ApiOperation({ summary: 'Получение всех судей' })
  @ApiResponse({ status: 200, type: [Judge] })
  @Get()
  getAll() {
    return this.judgeService.getAll();
  }
}
