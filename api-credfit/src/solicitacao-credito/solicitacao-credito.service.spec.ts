import { Test, TestingModule } from '@nestjs/testing';
import { SolicitacaoCreditoService } from './solicitacao-credito.service';

describe('SolicitacaoCreditoService', () => {
  let service: SolicitacaoCreditoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SolicitacaoCreditoService],
    }).compile();

    service = module.get<SolicitacaoCreditoService>(SolicitacaoCreditoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
