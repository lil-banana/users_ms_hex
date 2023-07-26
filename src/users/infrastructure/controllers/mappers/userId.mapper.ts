import { User } from '../../../domain/models/user.model';
import { UserIdDto } from '../dtos/userId.dto';

export class UserIdDtoMapper {
    toUserIdDto(user: User): UserIdDto {
        const userIdDto: UserIdDto = new UserIdDto();
        userIdDto.id = user.id;
        return userIdDto;
    }
}