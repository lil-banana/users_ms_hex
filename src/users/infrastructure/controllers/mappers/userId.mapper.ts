import { UserIdDto } from '../dtos/userId.dto';

export class UserIdDtoMapper {
    toUserIdDto(id: string): UserIdDto {
        const userIdDto: UserIdDto = new UserIdDto();
        userIdDto.id = id;
        return userIdDto;
    }
}