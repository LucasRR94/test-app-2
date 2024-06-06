import { Test, TestingModule } from '@nestjs/testing';
import { SolicitacaoCreditoController } from './solicitacao-credito.controller';
import { SolicitacaoCreditoService } from './solicitacao-credito.service';

describe('SolicitacaoCreditoController', () => {
  let controller: SolicitacaoCreditoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolicitacaoCreditoController],
      providers: [SolicitacaoCreditoService],
    }).compile();

    controller = module.get<SolicitacaoCreditoController>(SolicitacaoCreditoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
