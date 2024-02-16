import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IsAdmin } from 'src/guards/roles-auth.decorator';
import { RolesGuard } from 'src/guards/roles.guard';
import { PrizesRepository } from 'src/database/repositories/prize.repository';
import { Prize } from '../../../database/entities/prize.entity';
import { CreatePrizeDto } from '../../../types/dto/create-prize.dto';

@ApiTags('Призы')
@Controller('prizes')
export class PrizesController {

  constructor(private prizeRepository: PrizesRepository) {}

  @ApiOperation({ summary: 'Создание приза' })
  @ApiResponse({ status: 200, type: Prize })
  @Post()
  create(@Body() prizeDto: CreatePrizeDto) {
    return this.prizeRepository.create(prizeDto);
  }

  @ApiOperation({ summary: 'Получение всех призов' })
  @ApiResponse({ status: 200, type: [Prize] })
  @IsAdmin()
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.prizeRepository.getAll();
  }
}
