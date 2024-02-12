import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';
import { CreateAdminDto } from './dto/create-admin.dto';

@Injectable()
export class AdminsRepository {
  constructor(
    @InjectRepository(Admin)
    private adminsRepository: Repository<Admin>,
  ) {}
  async create(props: CreateAdminDto) {
    const admin = this.adminsRepository.create(props);
    const res = await this.adminsRepository.save(admin);
    return res;
  }
  async update(props: Admin) {
    const res = await this.adminsRepository.save(props);
    return res;
  }
  async getAll() {
    const users = await this.adminsRepository.find();
    return users;
  }
  async findById(id: number) {
    const data = this.adminsRepository.findOneBy({ id });
    return data;
  }
}
