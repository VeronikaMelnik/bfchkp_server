import { Module } from "@nestjs/common";
import { JudgesController } from "./judge.controller";
import { JudgesService } from "./judge.service";
import { JudgesRepository } from "src/database/repositories/judge.repository";
import { Judge } from "../../../database/entities/judge.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonsModule } from "src/modules/shared/person/person.module";



@Module({
  controllers: [JudgesController],
  providers: [
    JudgesRepository,
    JudgesService,
  ],
  imports: [
    TypeOrmModule.forFeature([Judge]),
    PersonsModule,
  ],
  exports: [
    JudgesRepository,
    JudgesService,
  ]
})
export class JudgesModule {}
