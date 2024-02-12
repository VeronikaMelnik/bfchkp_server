import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Prize } from "./prize.entity";
import { PrizesService } from "./prize.service";
import { PrizesRepository } from "./prize.repository";
import { PrizesController } from "./prize.controller";
import { JwtService } from "@nestjs/jwt";
import { Result } from "src/result/result.entity";
import { Member } from "src/member/member.entity";


@Module({
  controllers: [PrizesController],
  providers: [PrizesService, PrizesRepository, JwtService],
  imports: [
    TypeOrmModule.forFeature([Prize, Result, Member]),
  ],
  exports: [
    PrizesService,
    PrizesRepository,
  ]
})
export class PrizesModule {}
