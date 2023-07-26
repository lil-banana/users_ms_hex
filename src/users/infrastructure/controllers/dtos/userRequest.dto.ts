import { ApiProperty } from '@nestjs/swagger';

export class UserRequest {
    @ApiProperty({ description: 'The name of the user', example: 'John' })
    name: string;

    @ApiProperty({ description: 'The last name of the user', example: 'Doe' })
    lastName: string;

    @ApiProperty({ description: 'The document number of the user', example: '1234567890' })
    documentNumber: string;

    @ApiProperty({ description: 'The cellphone number of the user', example: '+571234567890' })
    cellphoneNumber: string;

    @ApiProperty({ description: 'The birth date of the user', example: '1990-01-01' })
    birthDay: Date;

    @ApiProperty({ description: 'The email of the user', example: 'john.doe@example.com' })
    email: string;

    @ApiProperty({ required: false, description: 'The unique identifier of the role assigned to the user, is a uuid', example: '91764071-9108-48f6-968c-9022e34a6ac8' })
    roleId?: string;

    @ApiProperty({ description: 'The password of the user', example: 'password' })
    password: string;
}