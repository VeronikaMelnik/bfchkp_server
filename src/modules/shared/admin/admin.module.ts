import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminsService } from "./admin.service";
import { Admin } from "src/database";

@Module({
  controllers: [],
  providers: [
    AdminsService
  ],
  imports: [
    TypeOrmModule.forFeature([Admin]),
  ],
  exports: [AdminsService]
})
export class AdminsModule {}

