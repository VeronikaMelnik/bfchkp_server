import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IsAdmin } from 'src/guards/roles-auth.decorator';
import { RolesGuard } from 'src/guards/roles.guard';
import { DisciplinesRepository } from 'src/database/repositories/discipline.repository';
import { Discipline } from '../../../database/entities/discipline.entity';
import { CreateDisciplineDto } from '../../../types/dto/create-discipline.dto';

@ApiTags('Дисциплины')
@Controller('disciplines')
export class DisciplinesController {

  constructor(private disciplineRepository: DisciplinesRepository) {}

  @ApiOperation({ summary: 'Создание дисциплины' })
  @ApiResponse({ status: 200, type: Discipline })
  @Post()
  create(@Body() disciplineDto: CreateDisciplineDto) {
    return this.disciplineRepository.create(disciplineDto);
  }

  @ApiOperation({ summary: 'Получение всех дисциплин' })
  @ApiResponse({ status: 200, type: [Discipline] })
  @IsAdmin()
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.disciplineRepository.getAll();
  }
}
