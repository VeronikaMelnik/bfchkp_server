import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DisciplinesRepository } from "src/database/repositories/discipline.repository";
import { Discipline } from "../../../database/entities/discipline.entity";
import { DisciplinesService } from "./discipline.service";
import { DisciplinesController } from "./discipline.controller";


@Module({
  controllers: [DisciplinesController],
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
