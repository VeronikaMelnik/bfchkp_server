import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IsAdmin } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { PersonsRepository } from './person.repository';
import { CreatePersonDto } from './dto/create-person.dto';
import { Person } from './person.entity';

@ApiTags('Персоны')
@Controller('persons')
export class PersonsController {

  constructor(private personRepository: PersonsRepository) {}

  @ApiOperation({ summary: 'Создание персоны' })
  @ApiResponse({ status: 200, type: Person })
  @Post()
  create(@Body() personDto: CreatePersonDto) {
    return this.personRepository.create(personDto);
  }

  @ApiOperation({ summary: 'Получение всех персон' })
  @ApiResponse({ status: 200, type: [Person] })
  @IsAdmin()
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.personRepository.getAll();
  }
}
