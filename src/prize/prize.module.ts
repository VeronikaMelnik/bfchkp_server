import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Prize } from "./prize.entity";
import { PrizesService } from "./prize.service";
import { PrizesRepository } from "./prize.repository";
import { PrizesController } from "./prize.controller";
import { JwtService } from "@nestjs/jwt";


@Module({
  controllers: [PrizesController],
  providers: [PrizesService, PrizesRepository, JwtService],
  imports: [
    TypeOrmModule.forFeature([Prize]),
  ],
  exports: [
    PrizesService,
    PrizesRepository,
  ]
})
export class PrizesModule {}
