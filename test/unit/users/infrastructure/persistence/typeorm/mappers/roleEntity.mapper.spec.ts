import { Role } from '../../../../../../../src/users/domain/models/role.model';
import { RoleEntity } from '../../../../../../../src/users/infrastructure/persistence/typeorm/entities/role.entity';
import { RoleEntityMapper } from '../../../../../../../src/users/infrastructure/persistence/typeorm/mappers/roleEntity.mapper';
import { OWNER_ROLE } from '../../../../mocks/role.mock';
import { OWNER_ROLE_ENTITY } from '../../../../mocks/roleEntity.mock';

describe('RoleEntityMapper', () => {
  let roleEntityMapper: RoleEntityMapper;

  beforeEach(() => {
    roleEntityMapper = new RoleEntityMapper();
  });

  describe('toRole', () => {
    it('should map RoleEntity to Role', () => {
      const roleEntity: RoleEntity = OWNER_ROLE_ENTITY;
      const expectedRole: Role = OWNER_ROLE;

      const role: Role = roleEntityMapper.toRole(roleEntity);

      expect(role).toEqual(expectedRole);
    });
  });

  describe('toRoleEntity', () => {
    it('should map Role to RoleEntity', () => {
      const role: Role = OWNER_ROLE;
      const expectedRoleEntity: RoleEntity = OWNER_ROLE_ENTITY;

      const roleEntity = roleEntityMapper.toRoleEntity(role);

      expect(roleEntity).toEqual(expectedRoleEntity);
    });
  });
});