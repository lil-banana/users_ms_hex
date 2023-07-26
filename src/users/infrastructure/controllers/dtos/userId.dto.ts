import { ApiProperty } from "@nestjs/swagger";

export class UserIdDto {
    @ApiProperty({ description: 'The unique identifier of the user, is an uuid', example: '74534afa-df9c-48b9-a9b2-29f65e694406' })
    id: string;
}