import { IsInt, IsOptional, IsString, Length, } from 'class-validator';

export class CreateEmpresaDto {
    @IsString()
    @Length(1, 255)
    cnpj: string;

    @IsOptional()
    @IsInt()
    razao_social?: number;
}
