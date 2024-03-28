import { Module } from "@nestjs/common";
import { JudgesService } from "./judge.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonsModule } from "src/modules/shared/person/person.module";
import { Judge } from "src/database";



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
