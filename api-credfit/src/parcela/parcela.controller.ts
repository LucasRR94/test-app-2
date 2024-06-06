import { Controller } from '@nestjs/common';
import { ParcelaService } from './parcela.service';

@Controller('parcela')
export class ParcelaController {
  constructor(private readonly parcelaService: ParcelaService) {}
}
