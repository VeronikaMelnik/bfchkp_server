import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IsAdmin } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { TeamsRepository } from './team.repository';
import { Team } from './team.entity';
import { CreateTeamDto } from './dto/create-team.dto';

@ApiTags('Команды')
@Controller('teams')
export class TeamsController {

  constructor(private teamRepository: TeamsRepository) {}

  @ApiOperation({ summary: 'Создание команды' })
  @ApiResponse({ status: 200, type: Team })
  @Post()
  create(@Body() teamDto: CreateTeamDto) {
    return this.teamRepository.create(teamDto);
  }

  @ApiOperation({ summary: 'Получение всех команд' })
  @ApiResponse({ status: 200, type: [Team] })
  @IsAdmin()
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.teamRepository.getAll();
  }
}
