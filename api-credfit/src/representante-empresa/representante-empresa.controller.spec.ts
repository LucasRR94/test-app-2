import { Test, TestingModule } from '@nestjs/testing';
import { RepresentanteEmpresaController } from './representante-empresa.controller';
import { RepresentanteEmpresaService } from './representante-empresa.service';

describe('RepresentanteEmpresaController', () => {
  let controller: RepresentanteEmpresaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RepresentanteEmpresaController],
      providers: [RepresentanteEmpresaService],
    }).compile();

    controller = module.get<RepresentanteEmpresaController>(RepresentanteEmpresaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
