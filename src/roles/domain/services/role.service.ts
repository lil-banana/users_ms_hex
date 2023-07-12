import { Inject, Injectable } from '@nestjs/common';
import { RoleServicePort } from '../interfaces/role.interface';
import { Role } from '../models/role.model';
import { RolePersistencePort, ROLE_PERSISTENCE_PORT } from '../repositories/role.repository';

export class RoleService implements RoleServicePort {

    constructor(@Inject(ROLE_PERSISTENCE_PORT) private readonly rolePersistencePort: RolePersistencePort) { }

    saveRole(role: Role): Promise<Role> {
        return this.rolePersistencePort.saveRole(role);
    }

    getAllRoles(): Promise<Role[]> {
        return this.rolePersistencePort.getAllRoles();
    }

    getRole(roleId: string): Promise<Role> {
        return this.rolePersistencePort.getRole(roleId);
    }
}