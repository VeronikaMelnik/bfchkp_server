import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Admin } from 'typeorm';
import { CreateAdminDto } from '../../../types/dto/admin.dto';
import { CreateTeamDto } from 'src/types/dto/team.dto';
import { CreateCoachDto } from 'src/types/dto/coach.dto';
import { AdminsAccessService } from './adminAccess.service';

@ApiTags('Команды администратора')
@Controller('api/admin')
export class AdminsAccessController {

  constructor(private adminsService: AdminsAccessService) {}

  @ApiOperation({ summary: 'Создание админа' })
  @ApiResponse({ status: 200, type: Admin })
  @Post('/')
  createAdmin(@Body() data: CreateAdminDto) {
    return this.adminsService.createAdmin(data);
  }

  @ApiOperation({ summary: 'Создание тренера' })
  @ApiResponse({ status: 200, type: Admin })
  @Post('/')
  createCoach(@Body() data: CreateCoachDto) {
    return this.adminsService.createCoach(data);
  }

  @ApiOperation({ summary: 'Создание команды' })
  @ApiResponse({ status: 200, type: Admin })
  @Post('/')
  createTeam(@Body() data: CreateTeamDto) {
    return this.adminsService.createTeam(data);
  }

}
