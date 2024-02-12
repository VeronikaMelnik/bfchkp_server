import { Injectable } from "@nestjs/common";
import { AdminsRepository } from "./admin.repository";

@Injectable()
export class AdminsService {
  constructor(private adminRepository: AdminsRepository) {}
}
