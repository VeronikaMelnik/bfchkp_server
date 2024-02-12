import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TitlesService } from "./title.service";
import { TitlesRepository } from "./title.repository";
import { TitlesController } from "./title.controller";
import { Title } from "./title.entity";
import { JwtService } from "@nestjs/jwt";


@Module({
  controllers: [TitlesController],
  providers: [TitlesService, TitlesRepository, JwtService],
  imports: [
    TypeOrmModule.forFeature([Title]),
  ],
  exports: [
    TitlesService,
    TitlesRepository,
  ]
})
export class TitlesModule {}
