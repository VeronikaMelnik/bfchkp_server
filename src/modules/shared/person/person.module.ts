import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Person } from "../../../database/entities/person.entity";
import { PersonsService } from "./person.service";


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
