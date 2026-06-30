import { IsString, IsNotEmpty, IsEmail, IsInt, IsBoolean, IsOptional } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    fullName!: string;

    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @IsInt()
    @IsNotEmpty()
    age!: number;

    @IsBoolean()
    @IsOptional()
    isActive?: boolean;
}
