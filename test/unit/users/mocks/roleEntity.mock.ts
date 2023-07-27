import { RoleEntity } from '../../../../src/users/infrastructure/persistence/typeorm/entities/role.entity';
import { OTHER_ROLE, OWNER_ROLE } from './role.mock';

export const OWNER_ROLE_ENTITY: RoleEntity = {
    id: OWNER_ROLE.id,
    name: OWNER_ROLE.name,
    description: OWNER_ROLE.description,
    createdAt: undefined,
    updatedAt: undefined
}

export const OTHER_ROLE_ENTITY: RoleEntity = {
    id: OTHER_ROLE.id,
    name: OTHER_ROLE.name,
    description: OTHER_ROLE.description,
    createdAt: undefined,
    updatedAt: undefined
}