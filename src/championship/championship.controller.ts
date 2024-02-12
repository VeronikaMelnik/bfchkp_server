import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IsAdmin } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { ChampionshipsRepository } from './championship.repository';
import { Championship } from './championship.entity';
import { CreateChampionshipDto } from './dto/create-championship.dto';

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
