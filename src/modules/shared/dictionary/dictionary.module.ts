import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DictionaryService } from "./dictionary.service";
import { Dictionary } from "src/database";


@Module({
  controllers: [],
  providers: [
    DictionaryService
  ],
  imports: [
    TypeOrmModule.forFeature([Dictionary]),
  ],
  exports: [
    DictionaryService,
  ]
})
export class DictionaryModule {}
