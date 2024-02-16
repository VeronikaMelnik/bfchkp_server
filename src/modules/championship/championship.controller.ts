import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IsAdmin } from 'src/guards/roles-auth.decorator';
import { RolesGuard } from 'src/guards/roles.guard';
import { Championship } from '../../database/entities/championship.entity';
import { CreateChampionshipDto } from '../../types/dto/championship.dto';
import { ChampionshipsRepository } from 'src/database/repositories';

@ApiTags('Чемпионаты')
@Controller('championships')
export class ChampionshipsController {

  constructor(private championshipRepository: ChampionshipsRepository) {}

  @ApiOperation({ summary: 'Создание чемпионата' })
  @ApiResponse({ status: 200, type: Championship })
  @Post()
  create(@Body() championshipDto: CreateChampionshipDto) {
    return this.championshipRepository.create(championshipDto);
  }

  @ApiOperation({ summary: 'Получение всех чемпионатов' })
  @ApiResponse({ status: 200, type: [Championship] })
  @IsAdmin()
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.championshipRepository.getAll();
  }
}
