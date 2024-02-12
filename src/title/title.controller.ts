import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IsAdmin } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { TitlesRepository } from './title.repository';
import { Title } from './title.entity';
import { CreateTitleDto } from './dto/create-title.dto';

@ApiTags('Титулы')
@Controller('titlers')
export class TitlesController {

  constructor(private titleRepository: TitlesRepository) {}

  @ApiOperation({ summary: 'Создание титула' })
  @ApiResponse({ status: 200, type: Title })
  @Post()
  create(@Body() titleDto: CreateTitleDto) {
    return this.titleRepository.create(titleDto);
  }

  @ApiOperation({ summary: 'Получение всех титулов' })
  @ApiResponse({ status: 200, type: [Title] })
  @IsAdmin()
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.titleRepository.getAll();
  }
}
