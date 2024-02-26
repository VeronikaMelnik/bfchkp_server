import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TitlesService } from "./title.service";
import { Title } from "src/database";


@Module({
  controllers: [],
  providers: [
    TitlesService
  ],
  imports: [
    TypeOrmModule.forFeature([Title]),
  ],
  exports: [
    TitlesService,
  ]
})
export class TitlesModule {}
