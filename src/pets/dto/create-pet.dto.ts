import { IsString, IsNotEmpty, IsDateString, IsNumber, IsOptional, IsUUID } from 'class-validator';

export class CreatePetDto {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()
    @IsNotEmpty()
    species!: string;

    @IsDateString()
    @IsNotEmpty()
    birthDate!: string;

    @IsNumber()
    @IsOptional()
    weight?: number;

    @IsUUID()
    @IsNotEmpty()
    userId!: string;
}
