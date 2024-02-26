import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AdminEntity } from "src/database/entities/admin.entity";
import { CreateAdminDto } from "src/types/dto/admin.dto";
import { Repository } from "typeorm";

@Injectable()
export class AdminsService {
  constructor(
    @InjectRepository(AdminEntity)
    private adminsService: Repository<AdminEntity>,
  ) {}
  async create(props: CreateAdminDto) {
    const admin = this.adminsService.create(props);
    const res = await this.adminsService.save(admin);
    return res;
  }
  async update(props: AdminEntity) {
    const res = await this.adminsService.save(props);
    return res;
  }
  async getAll() {
    const users = await this.adminsService.find();
    return users;
  }
  async findById(id: number) {
    const data = this.adminsService.findOneBy({ id });
    return data;
  }
}
