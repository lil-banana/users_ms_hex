import { RoleDto } from '../../../../src/users/infrastructure/controllers/dtos/role.dto';
import { OWNER_ROLE } from './role.mock';

export const OWNER_ROLE_DTO: RoleDto = {
    name: OWNER_ROLE.name,
    description: OWNER_ROLE.description
};