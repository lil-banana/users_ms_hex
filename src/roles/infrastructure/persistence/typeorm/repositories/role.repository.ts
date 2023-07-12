import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleEntity } from '../entities/role.entity';

@Injectable()
export class RoleRepository {
    constructor(
        @InjectRepository(RoleEntity)
        private roleRepository: Repository<RoleEntity>,
    ) { }

    save(user: RoleEntity): Promise<RoleEntity> {
        return this.roleRepository.save(user);
    }

    findOneById(id: string): Promise<RoleEntity | null> {
        return this.roleRepository.findOne({ where: { id } });
    }

    findOneByName(name: string): Promise<RoleEntity | null> {
        return this.roleRepository.findOne({ where: { name } });
    }

    findAll(): Promise<RoleEntity[]> {
        return this.roleRepository.find();
    }
}