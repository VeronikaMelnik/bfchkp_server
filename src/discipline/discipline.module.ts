import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DisciplinesRepository } from "./discipline.repository";
import { Discipline } from "./discipline.entity";
import { DisciplinesService } from "./discipline.service";
import { DisciplinesController } from "./discipline.controller";
import { JwtService } from "@nestjs/jwt";


@Module({
  controllers: [DisciplinesController],
  providers: [DisciplinesService, DisciplinesRepository, JwtService],
  imports: [
    TypeOrmModule.forFeature([Discipline]),
  ],
  exports: [
    DisciplinesService,
    DisciplinesRepository,
  ]
})
export class DisciplinesModule {}
