import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./user.repository";
import { AdminsService } from "src/admin/admin.service";

@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository,
    private adminService: AdminsService) {}
}
