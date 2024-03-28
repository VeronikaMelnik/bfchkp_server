import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NewsService } from "./news.service";
import { News } from "src/database";


@Module({
  controllers: [],
  providers: [
    NewsService
  ],
  imports: [
    TypeOrmModule.forFeature([News]),
  ],
  exports: [
    NewsService,
  ]
})
export class NewsModule {}
