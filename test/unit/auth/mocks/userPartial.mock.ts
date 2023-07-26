import { User } from '../../../../src/users/domain/models/user.model';
import { VALID_USER } from '../../users/mocks/user.mock';

export const VALID_PARTIAL_USER: Partial<User> = {
    email: VALID_USER.email,
    password: VALID_USER.password
};