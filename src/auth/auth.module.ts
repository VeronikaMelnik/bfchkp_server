import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { UserRepository } from '../database/repositories/user.repository';
import { PersonRepository } from 'src/database/repositories/person.repository';
import { User } from 'src/database/entities/user.entity';
import { Person } from 'src/database/entities/person.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Person]),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserRepository, PersonRepository],
})
export class AuthModule {}
