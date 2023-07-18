import { UserResponse } from '../../../../src/users/infrastructure/controllers/dto/userResponse.dto';
import { VALID_USER } from './user.mock';
import { OWNER_ROLE_DTO } from './roleDto.mock';

export const VALID_USER_RESPONSE: UserResponse = {
    id: VALID_USER.id,
    name: VALID_USER.name,
    lastName: VALID_USER.lastName,
    documentNumber: VALID_USER.documentNumber,
    cellphoneNumber: VALID_USER.cellphoneNumber,
    birthDay: VALID_USER.birthDay,
    email: VALID_USER.email,
    role: OWNER_ROLE_DTO
};