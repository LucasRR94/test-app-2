import { IsInt, IsString, IsDate, Min, Max } from 'class-validator';

export class CreateParcelaDto {
    @IsInt()
    @Min(0)
    @Max(4)
    numero_parcela: number;

    @IsString()
    status_parcela: string;

    @IsInt()
    credito_id: number;

    @IsInt()
    usuario_id: number;

    @IsDate()
    data_vencimento: Date;
}
