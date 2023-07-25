import { Role } from '../../../../../src/users/domain/models/role.model';
import { OWNER_ROLE } from '../../mocks/role.mock';

describe('Role Model', () => {
    describe('Success', () => {
        it('should create a new role with valid arguments', () => {
            const role: Role = new Role(OWNER_ROLE.id, OWNER_ROLE.name, OWNER_ROLE.description);
            expect(role.id).toBe(OWNER_ROLE.id);
            expect(role.name).toBe(OWNER_ROLE.name);
            expect(role.description).toBe(OWNER_ROLE.description);
        });

        it('should update user name', () => {
            const role: Role = OWNER_ROLE;
            role.description = 'New description';

            expect(role.description).toBe('New description');
        });
    });
});