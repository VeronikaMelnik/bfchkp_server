import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ResultsRepository } from "src/database/repositories/result.repository";
import { Result } from "../../../database/entities/result.entity";
import { ResultsService } from "./result.service";


@Module({
  controllers: [],
  providers: [
    ResultsRepository,
    ResultsService
  ],
  imports: [
    TypeOrmModule.forFeature([Result]),
  ],
  exports: [
    ResultsRepository,
  ]
})
export class ResultsModule {}
