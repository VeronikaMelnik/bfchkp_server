import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Judge } from '../../../database/entities/judge.entity';
import { CreateJudgeDto } from '../../../types/dto/judge.dto';
import { JudgesAccessService } from './judgeAccess.service';

@ApiTags('Судьи')
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
  // @IsAdmin()
  // @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.judgeService.getAll();
  }
}
