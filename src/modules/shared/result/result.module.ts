import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ResultsService } from "./result.service";
import { Result } from "src/database";


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
