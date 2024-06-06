import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { RepresentanteEmpresaService } from './representante-empresa.service';
import { RepresentanteEmpresaController } from './representante-empresa.controller';
import { RepresentanteEmpresa } from './entities/representante-empresa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RepresentanteEmpresa])],
  controllers: [RepresentanteEmpresaController],
  providers: [RepresentanteEmpresaService],
  exports: [TypeOrmModule, RepresentanteEmpresaService], // Exporting TypeOrmModule and EmpresaService
})
export class RepresentanteEmpresaModule { }
