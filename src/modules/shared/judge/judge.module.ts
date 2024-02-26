import { Module } from "@nestjs/common";
import { JudgesService } from "./judge.service";
import { Judge } from "../../../database/entities/judge.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonsModule } from "src/modules/shared/person/person.module";



@Module({
  controllers: [],
  providers: [
    JudgesService,
  ],
  imports: [
    TypeOrmModule.forFeature([Judge]),
    PersonsModule,
  ],
  exports: [
    JudgesService,
  ]
})
export class JudgesModule {}
