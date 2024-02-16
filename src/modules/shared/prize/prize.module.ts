import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Prize } from "../../../database/entities/prize.entity";
import { PrizesService } from "./prize.service";
import { PrizesRepository } from "src/database/repositories/prize.repository";
import { PrizesController } from "./prize.controller";


@Module({
  controllers: [PrizesController],
  providers: [
    PrizesRepository,
    PrizesService
  ],
  imports: [
    TypeOrmModule.forFeature([Prize]),
  ],
  exports: [
    PrizesRepository,
  ]
})
export class PrizesModule {}
