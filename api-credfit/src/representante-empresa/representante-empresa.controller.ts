import { Controller } from '@nestjs/common';
import { RepresentanteEmpresaService } from './representante-empresa.service';

@Controller('representante-empresa')
export class RepresentanteEmpresaController {
  constructor(private readonly representanteEmpresaService: RepresentanteEmpresaService) {}
}
