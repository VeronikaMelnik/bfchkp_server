import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ResultsRepository } from "./result.repository";
import { Result } from "./result.entity";
import { ResultsService } from "./result.service";
import { ResultsController } from "./result.controller";
import { JwtService } from "@nestjs/jwt";


@Module({
  controllers: [ResultsController],
  providers: [ResultsService, ResultsRepository, JwtService],
  imports: [
    TypeOrmModule.forFeature([Result]),
  ],
  exports: [
    ResultsService,
    ResultsRepository,
  ]
})
export class ResultsModule {}
