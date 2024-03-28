import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonsService } from "./person.service";
import { Person } from "src/database";


@Module({
  controllers: [],
  providers: [
    PersonsService
  ],
  imports: [
    TypeOrmModule.forFeature([Person]),
  ],
  exports: [
    PersonsService,
  ]
})
export class PersonsModule {}
