import { InvalidArgumentError } from '../../../../../src/users/domain/exceptions/invalidArgumentError.exception';
import { User } from '../../../../../src/users/domain/models/user.model';
import { OWNER_ROLE } from '../../mocks/role.mock';
import { OTHER_USER, VALID_USER } from '../../mocks/user.mock';

describe('User Model', () => {
    describe('Success', () => {
        it('should create a new user with valid arguments', () => {
            const user: User = new User(VALID_USER.id, VALID_USER.name, VALID_USER.lastName, VALID_USER.password, OWNER_ROLE, VALID_USER.email, VALID_USER.documentNumber, VALID_USER.cellphoneNumber, VALID_USER.birthDay);
            expect(user.id).toBe(VALID_USER.id);
            expect(user.name).toBe(VALID_USER.name);
            expect(user.lastName).toBe(VALID_USER.lastName);
            expect(user.documentNumber).toBe(VALID_USER.documentNumber);
            expect(user.cellphoneNumber).toBe(VALID_USER.cellphoneNumber);
            expect(user.birthDay).toEqual(VALID_USER.birthDay);
            expect(user.email).toBe(VALID_USER.email);
            expect(user.password).toBe(VALID_USER.password);
            expect(user.role).toBe(OWNER_ROLE);
        });

        it('should create a new user with valid arguments', () => {
            const user: User = new User(VALID_USER.id, VALID_USER.name, VALID_USER.lastName, VALID_USER.password, OWNER_ROLE);
            expect(user.id).toBe(VALID_USER.id);
            expect(user.name).toBe(VALID_USER.name);
            expect(user.lastName).toBe(VALID_USER.lastName);
            expect(user.password).toBe(VALID_USER.password);
            expect(user.role).toBe(OWNER_ROLE);
        });

        it('should update user name', () => {
            const user: User = VALID_USER;
            user.name = OTHER_USER.name;

            expect(user.name).toBe(OTHER_USER.name);
        });

        it('should update user email', () => {
            const user = VALID_USER;
            user.email = OTHER_USER.email;

            expect(user.email).toBe(OTHER_USER.email);
        });

        it('should update other values', () => {
            const user: User = VALID_USER;
            user.lastName = OTHER_USER.lastName;
            user.cellphoneNumber = OTHER_USER.cellphoneNumber;
            user.birthDay = OTHER_USER.birthDay;
            user.password = OTHER_USER.password;
            user.role = OTHER_USER.role;

            expect(user.lastName).toBe(OTHER_USER.lastName);
            expect(user.cellphoneNumber).toBe(OTHER_USER.cellphoneNumber);
            expect(user.birthDay).toEqual(OTHER_USER.birthDay);
            expect(user.password).toBe(OTHER_USER.password);
            expect(user.role).toBe(OTHER_USER.role);
        });
    });
});