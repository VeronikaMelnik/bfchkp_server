import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TitlesService } from "./title.service";
import { TitlesRepository } from "src/database/repositories/title.repository";
import { TitlesController } from "./title.controller";
import { Title } from "./title.entity";


@Module({
  controllers: [TitlesController],
  providers: [
    TitlesRepository,
    TitlesService
  ],
  imports: [
    TypeOrmModule.forFeature([Title]),
  ],
  exports: [
    TitlesRepository,
  ]
})
export class TitlesModule {}
