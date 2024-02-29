import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Admin } from 'typeorm';
import { CreateAdminDto } from '../../../types/dto/admin.dto';
import { CreateTeamDto } from 'src/types/dto/team.dto';
import { CreateCoachDto } from 'src/types/dto/coach.dto';
import { AdminsAccessService } from './adminAccess.service';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@ApiTags('Команды администратора')
@Controller('api/admin')
export class AdminsAccessController {

  constructor(private adminsService: AdminsAccessService) {}

  @ApiOperation({ summary: 'Создание админа', description: 'Only for admin users' })
  @ApiResponse({ status: 200, type: Admin })
  @UseGuards(JwtAuthGuard)
  @Post('/')
  createAdmin(@Body() data: CreateAdminDto) {
    return this.adminsService.createAdmin(data);
  }

  @ApiOperation({ summary: 'Создание тренера', description: 'Only for admin users' })
  @ApiResponse({ status: 200, type: Admin })
  @UseGuards(JwtAuthGuard)
  @Post('/coach')
  createCoach(@Body() data: CreateCoachDto) {
    return this.adminsService.createCoach(data);
  }

  @ApiOperation({ summary: 'Создание команды', description: 'Only for admin users' })
  @ApiResponse({ status: 200, type: Admin })
  @UseGuards(JwtAuthGuard)
  @Post('/team')
  createTeam(@Body() data: CreateTeamDto) {
    return this.adminsService.createTeam(data);
  }

}
