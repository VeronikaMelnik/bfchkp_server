import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PrizesService } from "./prize.service";
import { Prize } from "src/database";


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
