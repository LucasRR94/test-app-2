import { Controller, Post, Body } from '@nestjs/common';
import { SolicitacaoCreditoService } from './solicitacao-credito.service';
import { EvaluationSolicitacaoCreditoDto } from './dto/evaluation-solicitacao-credito.dto';

@Controller('solicitacao-credito')
export class SolicitacaoCreditoController {
  constructor(private readonly solicitacaoCreditoService: SolicitacaoCreditoService) {

  }
  @Post()
  async create(@Body() evaluationUser: EvaluationSolicitacaoCreditoDto): Promise<any> {
    return this.solicitacaoCreditoService.create(evaluationUser);
  }
}
