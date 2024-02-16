import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IsAdmin } from 'src/guards/roles-auth.decorator';
import { RolesGuard } from 'src/guards/roles.guard';
import { ResultsRepository } from 'src/database/repositories/result.repository';
import { Result } from '../../../database/entities/result.entity';
import { CreateResultDto } from '../../../types/dto/create-result.dto';

@ApiTags('Результаты')
@Controller('results')
export class ResultsController {

  constructor(private resultRepository: ResultsRepository) {}

  @ApiOperation({ summary: 'Создание результата соревнований' })
  @ApiResponse({ status: 200, type: Result })
  @Post()
  create(@Body() resultDto: CreateResultDto) {
    return this.resultRepository.create(resultDto);
  }

  @ApiOperation({ summary: 'Получение всех результатов соревнований' })
  @ApiResponse({ status: 200, type: [Result] })
  @IsAdmin()
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.resultRepository.getAll();
  }
}
