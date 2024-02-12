import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IsAdmin } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { Admin } from 'typeorm';
import { CreateAdminDto } from './dto/create-admin.dto';
import { AdminsRepository } from './admin.repository';

@ApiTags('Админы')
@Controller('admins')
export class AdminsController {

  constructor(private adminRepository: AdminsRepository) {}

  @ApiOperation({ summary: 'Создание админа' })
  @ApiResponse({ status: 200, type: Admin })
  @Post()
  create(@Body() userDto: CreateAdminDto) {
    return this.adminRepository.create(userDto);
  }

  @ApiOperation({ summary: 'Получение всех админов' })
  @ApiResponse({ status: 200, type: [Admin] })
  @IsAdmin()
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.adminRepository.getAll();
  }
}
