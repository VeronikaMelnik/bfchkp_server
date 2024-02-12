import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IsAdmin } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { Championships_DisciplinesRepository } from './championship-discipline.repository';
import { CreateChampionship_DisciplineDto } from './dto/create-championship-discipline.dto';
import { Championship_Discipline } from './championship-discipline.entity';

@ApiTags('Чемпионаты_Дисциплины')
@Controller('championships_disciplines')
export class Championships_DisciplinesController {

  constructor(private championships_disciplinesRepository: Championships_DisciplinesRepository) {}

  @ApiOperation({ summary: 'Создание чемпионата-дисциплины' })
  @ApiResponse({ status: 200, type: Championship_Discipline })
  @Post()
  create(@Body() championship_disciplineDto: CreateChampionship_DisciplineDto) {
    return this.championships_disciplinesRepository.create(championship_disciplineDto);
  }

  @ApiOperation({ summary: 'Получение всех чемпионатов-дисциплин' })
  @ApiResponse({ status: 200, type: [Championship_Discipline] })
  @IsAdmin()
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.championships_disciplinesRepository.getAll();
  }
}
