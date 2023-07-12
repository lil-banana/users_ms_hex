import { Role } from '../../domain/models/role.model';
import { RoleDto } from '../dto/role.dto';

export class RoleDtoMapper {
    toRoleDto(role: Role): RoleDto {
        const roleDto = new RoleDto();
        roleDto.name = role.getName();
        roleDto.description = role.getDescription();
        return roleDto;
    }
}