import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DisciplinesRepository } from "src/database/repositories/discipline.repository";
import { Discipline } from "../../../database/entities/discipline.entity";
import { DisciplinesService } from "./discipline.service";


@Module({
  controllers: [],
  providers: [
    DisciplinesService,
    DisciplinesRepository,
  ],
  imports: [
    TypeOrmModule.forFeature([Discipline]),
  ],
  exports: [
    DisciplinesService,
    DisciplinesRepository,
  ]
})
export class DisciplinesModule {}
