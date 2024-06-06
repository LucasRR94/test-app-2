import { Test, TestingModule } from '@nestjs/testing';
import { RepresentanteEmpresaService } from './representante-empresa.service';

describe('RepresentanteEmpresaService', () => {
  let service: RepresentanteEmpresaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepresentanteEmpresaService],
    }).compile();

    service = module.get<RepresentanteEmpresaService>(RepresentanteEmpresaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
