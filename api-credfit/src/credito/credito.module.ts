import { Module } from '@nestjs/common';
import { CreditoService } from './credito.service';
import { Credito } from "./entity/credito.entity";
import { CreditoController } from './credito.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Credito])],
  controllers: [CreditoController],
  providers: [CreditoService],
  exports: [TypeOrmModule, CreditoService]
})
export class CreditoModule { }
