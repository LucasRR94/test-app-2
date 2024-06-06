import { Controller } from '@nestjs/common';
import { CreditoService } from './credito.service';

@Controller('credito')
export class CreditoController {
  constructor(private readonly creditoService: CreditoService) {}
}
