import { PartialType } from '@nestjs/mapped-types';
import { CreateSolicitacaoCreditoDto } from './create-solicitacao-credito.dto';

export class UpdateSolicitacaoCreditoDto extends PartialType(CreateSolicitacaoCreditoDto) { }