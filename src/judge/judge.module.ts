import { Module } from "@nestjs/common";
import { JudgesController } from "./judge.controller";
import { JudgesService } from "./judge.service";
import { JudgesRepository } from "./judge.repository";
import { Judge } from "./judge.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtService } from "@nestjs/jwt";



@Module({
  controllers: [JudgesController],
  providers: [JudgesService, JudgesRepository, JwtService],
  imports: [
    TypeOrmModule.forFeature([Judge]),
  ],
  exports: [
    JudgesService,
    JudgesRepository,
  ]
})
export class JudgesModule {}
