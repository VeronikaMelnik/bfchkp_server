import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IsAdmin } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { Member } from './member.entity';
import { CreateMemberDto } from './dto/create-member.dto';
import { MembersRepository } from './member.repository';

@ApiTags('Участники')
@Controller('members')
export class MembersController {

  constructor(private memberRepository: MembersRepository) {}

  @ApiOperation({ summary: 'Создание участника' })
  @ApiResponse({ status: 200, type: Member })
  @Post()
  create(@Body() memberDto: CreateMemberDto) {
    return this.memberRepository.create(memberDto);
  }

  @ApiOperation({ summary: 'Получение всех участников' })
  @ApiResponse({ status: 200, type: [Member] })
  @IsAdmin()
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.memberRepository.getAll();
  }
}
