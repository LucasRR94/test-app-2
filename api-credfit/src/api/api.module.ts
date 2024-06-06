import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { EmpresaModule } from 'src/empresa/empresa.module';
import { RepresentanteEmpresaModule } from 'src/representante-empresa/representante-empresa.module';
import { ParcelaModule } from 'src/parcela/parcela.module';
import { SolicitacaoCreditoModule } from 'src/solicitacao-credito/solicitacao-credito.module';
import { CreditoModule } from 'src/credito/credito.module';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule, EmpresaModule, RepresentanteEmpresaModule, ParcelaModule, SolicitacaoCreditoModule, CreditoModule, UsuarioModule],
  controllers: [ApiController,],
  providers: [ApiService],
})
export class ApiModule { }
