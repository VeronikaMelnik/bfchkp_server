import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IsAdmin } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { Championships_JudgesRepository } from './championship-judge.repository';
import { Championship_Judge } from './championship-judge.entity';
import { CreateChampionship_JudgeDto } from './dto/create-championship-judge.dto';

@ApiTags('Чемпионаты_Судьи')
@Controller('championships_judges')
export class Championships_JudgesController {

  constructor(private championships_judgesRepository: Championships_JudgesRepository) {}

  @ApiOperation({ summary: 'Создание чемпионата-судьи' })
  @ApiResponse({ status: 200, type: Championship_Judge })
  @Post()
  create(@Body() championship_judgeDto: CreateChampionship_JudgeDto) {
    return this.championships_judgesRepository.create(championship_judgeDto);
  }

  @ApiOperation({ summary: 'Получение всех чемпионатов-судей' })
  @ApiResponse({ status: 200, type: [Championship_Judge] })
  @IsAdmin()
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.championships_judgesRepository.getAll();
  }
}
