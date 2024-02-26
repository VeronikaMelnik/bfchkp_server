import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './user.service';
import { PersonsModule } from '../../shared/person/person.module';
import { User } from 'src/database';

@Module({
  controllers: [],
  providers: [
    UsersService
  ],
  imports: [
    TypeOrmModule.forFeature([User]),
    PersonsModule,
  ],
  exports: [
    UsersService
  ]
})
export class UsersModule {}
