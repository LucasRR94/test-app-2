import { IsInt } from 'class-validator';

export class EvaluationSolicitacaoCreditoDto {
    @IsInt()
    id_user: number
}
