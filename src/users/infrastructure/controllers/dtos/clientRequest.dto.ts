import { IsString, IsNotEmpty, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ClientRequest {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'The name of the user', example: 'John' })
    name: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'The last name of the user', example: 'Doe' })
    lastName: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'The document number of the user', example: '1234567890' })
    documentNumber: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'The cellphone number of the user', example: '+571234567890' })
    cellphoneNumber: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'The email of the user', example: 'john.doe@example.com' })
    email: string;

    @ApiProperty({ description: 'The unique identifier of the role assigned to the user, is a uuid', example: '91764071-9108-48f6-968c-9022e34a6ac8' })
    roleId: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'The password of the user', example: 'password' })
    password: string;
}