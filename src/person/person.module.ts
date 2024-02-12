import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonsRepository } from "./person.repository";
import { Person } from "./person.entity";
import { PersonsService } from "./person.service";
import { PersonsController } from "./person.controller";
import { JwtService } from "@nestjs/jwt";


@Module({
  controllers: [PersonsController],
  providers: [PersonsService, PersonsRepository, JwtService],
  imports: [
    TypeOrmModule.forFeature([Person]),
  ],
  exports: [
    PersonsService,
    PersonsRepository,
  ]
})
export class PersonsModule {}
