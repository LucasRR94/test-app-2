import { IsEmail, IsInt, IsNumber, IsOptional, IsString, Length, Max, Min } from 'class-validator';

export class CreateUsuarioDto {
    @IsString()
    @Length(1, 255)
    nome_completo: string;

    @IsOptional()
    @IsInt()
    empresa_id?: number;

    @IsString()
    @Length(11, 14)
    cpf: string;

    @IsEmail()
    @Length(1, 255)
    e_mail: string;

    @IsString()
    @Length(1, 255)
    hash_senha: string;

    @IsString()
    @Length(1, 255)
    salt: string;

    @IsNumber()
    salario: number;

    @IsInt()
    @Min(0)
    @Max(1000)
    score: number;
}
