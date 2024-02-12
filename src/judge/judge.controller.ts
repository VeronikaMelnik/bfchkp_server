import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IsAdmin } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { Judge } from './judge.entity';
import { CreateJudgeDto } from './dto/create-judge.dto';
import { JudgesRepository } from './judge.repository';

@ApiTags('Судьи')
@Controller('judges')
export class JudgesController {

  constructor(private judgeRepository: JudgesRepository) {}

  @ApiOperation({ summary: 'Создание судьи' })
  @ApiResponse({ status: 200, type: Judge })
  @Post()
  create(@Body() judgeDto: CreateJudgeDto) {
    return this.judgeRepository.create(judgeDto);
  }

  @ApiOperation({ summary: 'Получение всех судей' })
  @ApiResponse({ status: 200, type: [Judge] })
  @IsAdmin()
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.judgeRepository.getAll();
  }
}
