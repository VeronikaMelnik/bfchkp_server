import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonsRepository } from "src/database/repositories/person.repository";
import { Person } from "../../../database/entities/person.entity";
import { PersonsService } from "./person.service";
import { JwtModule } from "@nestjs/jwt";


@Module({
  imports: [
    TypeOrmModule.forFeature([Person]),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'SECRET',
      signOptions: {
        expiresIn: '24h',
      }
    })
  ],
  providers: [
    PersonsRepository,
    PersonsService
  ],
  controllers: [],
  exports: [
    JwtModule,
    PersonsService,
  ]
})
export class PersonsModule {}
