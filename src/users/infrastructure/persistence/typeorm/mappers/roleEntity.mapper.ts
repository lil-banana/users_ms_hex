import { Role } from '../../../../domain/models/role.model';
import { RoleEntity } from '../entities/role.entity';

export class RoleEntityMapper {
    toRole(roleEntity: RoleEntity): Role {
        const role: Role = new Role(
            roleEntity.id,
            roleEntity.name,
            roleEntity.description,
        );
        return role;
    }

    toRoleEntity(role: Role): RoleEntity {
        const roleEntity: RoleEntity = new RoleEntity();
        roleEntity.id = role.id;
        roleEntity.name = role.name;
        roleEntity.description = role.description;
        return roleEntity;
    }
}