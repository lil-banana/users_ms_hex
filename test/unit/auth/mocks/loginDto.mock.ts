import { LoginDto } from '../../../../src/auth/infrastructure/controllers/dtos/login.dto';
import { VALID_USER } from '../../users/mocks/user.mock';

export const LOGIN_DTO: LoginDto = {
    email: VALID_USER.email,
    password: VALID_USER.password
};