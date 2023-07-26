import { Role } from '../../../../../../src/users/domain/models/role.model';
import { RoleDto } from '../../../../../../src/users/infrastructure/controllers/dtos/role.dto';
import { RoleDtoMapper } from '../../../../../../src/users/infrastructure/controllers/mappers/roleDto.mapper';
import { OWNER_ROLE } from '../../../mocks/role.mock';
import { OWNER_ROLE_DTO } from '../../../mocks/roleDto.mock';

describe('Role Dto Mapper', () => {
    let roleDtoMapper: RoleDtoMapper;

    beforeEach(() => {
        roleDtoMapper = new RoleDtoMapper();
    });

    describe('toRoleDto', () => {
        it('should map Role to RoleDto', () => {
            const role: Role = OWNER_ROLE;
            const expectedRoleDto: RoleDto = OWNER_ROLE_DTO;

            const roleDto = roleDtoMapper.toRoleDto(role);

            expect(roleDto).toEqual(expectedRoleDto);
        });
    });
});
