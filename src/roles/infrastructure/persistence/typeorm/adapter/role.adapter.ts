import { Injectable } from '@nestjs/common';
import { RolePersistencePort } from 'src/roles/domain/repositories/role.repository';
import { RoleRepository } from '../repositories/role.repository';
import { RoleEntityMapper } from '../mappers/roleEntity.mapper';
import { Role } from 'src/roles/domain/models/role.model';
import { RoleEntity } from '../entities/role.entity';

@Injectable()
export class RoleAdapter implements RolePersistencePort {
    
    constructor(
        private readonly roleRepository: RoleRepository,
        private readonly roleEntityMapper: RoleEntityMapper,
    ) { } 

    async saveRole(role: Role): Promise<Role> {
        const existingRole: RoleEntity = await this.roleRepository.findOneByName(role.getName());
        if (existingRole) {
            //throw new RoleAlreadyExistsException();
            return this.roleEntityMapper.toRole(existingRole);
        }
        const roleEntity: RoleEntity = this.roleEntityMapper.toRoleEntity(role);
        return this.roleEntityMapper.toRole(await this.roleRepository.save(roleEntity));
    }

    async getAllRoles(): Promise<Role[]> {
        const roleEntityList: RoleEntity[] = await this.roleRepository.findAll();
        if (roleEntityList.length === 0) {
            //throw new NoDataFoundException();
        }
        return this.roleEntityMapper.toRoleList(roleEntityList);
    }

    async getRole(roleId: string): Promise<Role> {
        const roleEntity: RoleEntity = await this.roleRepository.findOneById(roleId);
        if (!roleEntity) {
            //throw new RoleNotFoundException();
        }
        return this.roleEntityMapper.toRole(roleEntity);
    }
}