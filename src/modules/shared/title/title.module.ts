import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TitlesService } from "./title.service";
import { TitlesRepository } from "src/database/repositories/title.repository";
import { Title } from "src/database";


@Module({
  controllers: [],
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
