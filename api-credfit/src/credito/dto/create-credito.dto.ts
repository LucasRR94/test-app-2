import { IsInt, IsNumber, Min, Max } from 'class-validator';

export class CreateCreditoDto {
    @IsInt()
    usuario_id: number;

    @IsInt()
    @Min(0)
    @Max(1000)
    score: number;

    @IsNumber()
    salario_usuario: number;

    @IsNumber()
    valor_disponivel: number;

    @IsInt()
    @Min(0)
    @Max(4)
    numero_de_parcelas: number;
}