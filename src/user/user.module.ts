import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { AuthModule } from '../auth/auth.module';
import { UsersService } from './user.service';
import { UsersRepository } from './user.repository';
import { UsersController } from './user.controller';
import { Person } from 'src/person/person.entity';
import { AdminsModule } from 'src/admin/admin.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  imports: [
    TypeOrmModule.forFeature([User, Person]),
    forwardRef(() => AuthModule),
    AdminsModule
  ],
  exports: [
    UsersService,
    UsersRepository,
  ]
})
export class UsersModule {}
