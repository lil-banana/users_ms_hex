import { Role } from '../../../domain/models/role.model';
import { RoleDto } from '../dtos/role.dto';

export class RoleDtoMapper {
    toRoleDto(role: Role): RoleDto {
        const roleDto = new RoleDto();
        roleDto.name = role.name;
        roleDto.description = role.description;
        return roleDto;
    }
}