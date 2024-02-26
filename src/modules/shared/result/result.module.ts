import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Result } from "../../../database/entities/result.entity";
import { ResultsService } from "./result.service";


@Module({
  controllers: [],
  providers: [
    ResultsService
  ],
  imports: [
    TypeOrmModule.forFeature([Result]),
  ],
  exports: [
    ResultsService,
  ]
})
export class ResultsModule {}
