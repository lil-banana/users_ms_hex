import { IsString, IsNotEmpty, IsDate, IsEmpty } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class OwnerRequest {
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
    @Transform(/* istanbul ignore next */ ({ value }) => new Date(value))
    @IsDate()
    @ApiProperty({ description: 'The birth date of the user', example: '1990-01-01' })
    birthDay: Date;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'The email of the user', example: 'john.doe@example.com' })
    email: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'The password of the user', example: 'password' })
    password: string;

    @IsEmpty()
    roleId: string;
}