import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminsService } from "./admin.service";
import { AdminsRepository } from "./admin.repository";
import { Admin } from "typeorm";
import { AdminsController } from "./admin.controller";
import { JwtService } from "@nestjs/jwt";
import { Person } from "src/person/person.entity";


@Module({
  controllers: [AdminsController],
  providers: [AdminsService, AdminsRepository, JwtService],
  imports: [
    TypeOrmModule.forFeature([Admin, Person])
  ],
  exports: [
    AdminsService,
    AdminsRepository,

  ]
})
export class AdminsModule {}

