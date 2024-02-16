import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './user.service';
import { UsersRepository } from 'src/database/repositories/user.repository';
import { UsersController } from './user.controller';
import { PersonsModule } from '../../shared/person/person.module';
import { User } from 'src/database';

@Module({
  controllers: [UsersController],
  providers: [
    UsersRepository,
    UsersService
  ],
  imports: [
    TypeOrmModule.forFeature([User]),
    PersonsModule
  ],
  exports: []
})
export class UsersModule {}
