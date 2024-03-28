import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DisciplinesService } from "./discipline.service";
import { Discipline } from "src/database";


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
