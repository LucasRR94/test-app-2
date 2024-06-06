import { IsInt, IsOptional, IsDate } from 'class-validator';

export class CreateSolicitacaoCreditoDto {
    @IsInt()
    usuario_solicitante: number;

    @IsOptional()
    @IsInt()
    credito_id?: number;

    @IsOptional()
    @IsDate()
    data_analise?: Date;

    @IsOptional()
    @IsDate()
    data_solicitacao?: Date;
}
