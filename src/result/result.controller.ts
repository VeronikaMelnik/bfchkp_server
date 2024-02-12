import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IsAdmin } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { ResultsRepository } from './result.repository';
import { Result } from './result.entity';
import { CreateResultDto } from './dto/create-result.dto';

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
