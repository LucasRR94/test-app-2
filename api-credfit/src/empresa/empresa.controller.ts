import { Controller } from '@nestjs/common';
import { EmpresaService } from './empresa.service';

@Controller('empresa')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) { }
}
