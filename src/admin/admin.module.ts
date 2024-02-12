import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminsService } from "./admin.service";
import { AdminsRepository } from "./admin.repository";
import { Admin } from "typeorm";
import { AdminsController } from "./admin.controller";
import { JwtService } from "@nestjs/jwt";


@Module({
  controllers: [AdminsController],
  providers: [AdminsService, AdminsRepository, JwtService],
  imports: [
    TypeOrmModule.forFeature([Admin]),
  ],
  exports: [
    AdminsService,
    AdminsRepository,
  ]
})
export class AdminsModule {}
