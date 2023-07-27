import { User } from '../../../../src/users/domain/models/user.model';
import { OWNER_ROLE, OWNER_ROLE_ONLY_ID, OTHER_ROLE, OTHER_ROLE_ONLY_ID } from './role.mock';

export const VALID_USER = new User(
    '5ce0e871-ecaf-477d-a443-230517a3fb6d',
    'John',
    'Doe',
    'password',
    OWNER_ROLE,
    'john@example.com',
    '123456789',
    '987654321',
    new Date('1990-01-01'),
);

export const VALID_USER_NO_ROLE = new User(
    '5ce0e871-ecaf-477d-a443-230517a3fb6d',
    'John',
    'Doe',
    'password',
    undefined,
    'john@example.com',
    '123456789',
    '987654321',
    new Date('1990-01-01'),
);

export const VALID_USER_NO_ID = new User(
    undefined,
    'John',
    'Doe',
    'password',
    OTHER_ROLE_ONLY_ID,
    'john@example.com',
    '123456789',
    '987654321',
    new Date('1990-01-01')
);

export const VALID_USER_NO_ID_NO_ROLE = new User(
    undefined,
    'John',
    'Doe',
    'password',
    OWNER_ROLE_ONLY_ID,
    'john@example.com',
    '123456789',
    '987654321',
    new Date('1990-01-01'),
);

export const OTHER_USER = new User(
    '91a6c3f2-553e-421e-917a-2a2030b2236f',
    'Jane',
    'Doeh',
    'password1',
    OTHER_ROLE,
    'jane@example.com',
    '0123456789',
    '9876543210',
    new Date('1991-01-01'),
);

export const VALID_USER_ONLY_ID = new User(
    VALID_USER.id,
    undefined,
    undefined,
    undefined,
    undefined
);

export const EMPLOYEE_USER_NO_ID = new User(
    undefined,
    OTHER_USER.name,
    OTHER_USER.lastName,
    OTHER_USER.password,
    OTHER_ROLE_ONLY_ID,
    OTHER_USER.email,
    OTHER_USER.documentNumber,
    OTHER_USER.cellphoneNumber,
    OTHER_USER.birthDay,
    VALID_USER_ONLY_ID
);

export const EMPLOYEE_USER = new User(
    OTHER_USER.id,
    OTHER_USER.name,
    OTHER_USER.lastName,
    OTHER_USER.password,
    OTHER_ROLE,
    OTHER_USER.email,
    OTHER_USER.documentNumber,
    OTHER_USER.cellphoneNumber,
    OTHER_USER.birthDay,
    VALID_USER
);