import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from '../entities/admin.entity';

@Injectable()
export class AdminRepository {
  constructor(
    @InjectRepository(Admin)
    private adminsRepository: Repository<Admin>,
  ) {}
  async create(props: AdminType) {
    const admin = this.adminsRepository.create(props);
    const res = await this.adminsRepository.save(admin);
    return res;
  }
  async update(props: Admin) {
    const res = await this.adminsRepository.save(props);
    return res;
  }
  async findById(id: number) {
    const data = this.adminsRepository.findOneBy({ id });
    return data;
  }
}
type AdminType = {
  personId?: number;
};
