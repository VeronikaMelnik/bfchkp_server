import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Admin } from 'typeorm';
import { CreateTeamDto } from 'src/types/dto/team.dto';
import { CreateCoachDto } from 'src/types/dto/coach.dto';
import { AdminsAccessService } from './adminAccess.service';
import { AdminRoleGuard } from 'src/guards/admin.guard';
import { CreateAdminDto } from 'src/types/dto/admin.dto';
import { GetAllUsersDto } from 'src/types/dto/user.dto';

@ApiTags('Команды администратора')
@ApiBearerAuth()
@UseGuards(AdminRoleGuard)
@Controller('api/admin')
export class AdminsAccessController {

  constructor(private adminsService: AdminsAccessService) {}

  @ApiOperation({ summary: 'Создание админа', description: 'Only for admin users' })
  @ApiResponse({ status: 200, type: Admin })
  @Post('/')
  createAdmin(@Body() data: CreateAdminDto) {
    return this.adminsService.createAdmin(data);
  }

  @ApiOperation({ summary: 'Создание тренера', description: 'Only for admin users' })
  @ApiResponse({ status: 200, type: Admin })
  @Post('/coach')
  createCoach(@Body() data: CreateCoachDto) {
    return this.adminsService.createCoach(data);
  }

  @ApiOperation({ summary: 'Создание команды', description: 'Only for admin users' })
  @ApiResponse({ status: 200, type: Admin })
  @Post('/team')
  createTeam(@Body() data: CreateTeamDto) {
    return this.adminsService.createTeam(data);
  }

  @ApiOperation({ summary: 'Все юзеры'})
  @ApiResponse({ status: 200, type: Admin })
  @Get('/users')
  getAll(@Query() data: GetAllUsersDto) {
    return this.adminsService.getAllUsers(data);
  }

}
