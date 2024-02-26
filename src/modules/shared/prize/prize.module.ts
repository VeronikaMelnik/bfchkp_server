import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Prize } from "../../../database/entities/prize.entity";
import { PrizesService } from "./prize.service";


@Module({
  controllers: [],
  providers: [
    PrizesService
  ],
  imports: [
    TypeOrmModule.forFeature([Prize]),
  ],
  exports: [
    PrizesService,
  ]
})
export class PrizesModule {}
