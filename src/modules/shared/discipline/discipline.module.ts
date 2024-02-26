import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Discipline } from "../../../database/entities/discipline.entity";
import { DisciplinesService } from "./discipline.service";


@Module({
  controllers: [],
  providers: [
    DisciplinesService,
  ],
  imports: [
    TypeOrmModule.forFeature([Discipline]),
  ],
  exports: [
    DisciplinesService,
  ]
})
export class DisciplinesModule {}
