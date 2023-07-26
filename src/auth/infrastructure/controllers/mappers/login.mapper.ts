import { User } from '../../../../users/domain/models/user.model';
import { LoginDto } from '../dtos/login.dto';

export class LoginDtoMapper {
    toUserPartial(loginDto: LoginDto): Partial<User> {
        return {
            email: loginDto.email,
            password: loginDto.password,
        };
    }
}