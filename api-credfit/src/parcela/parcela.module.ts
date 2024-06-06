import { Module } from '@nestjs/common';
import { ParcelaService } from './parcela.service';
import { ParcelaController } from './parcela.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parcela } from './entities/parcela.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Parcela])],
  controllers: [ParcelaController],
  providers: [ParcelaService],
  exports: [TypeOrmModule, ParcelaService]
})
export class ParcelaModule { }
