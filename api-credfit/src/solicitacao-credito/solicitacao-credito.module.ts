import { Module } from '@nestjs/common';
import { SolicitacaoCreditoService } from './solicitacao-credito.service';
import { SolicitacaoCreditoController } from './solicitacao-credito.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolicitacaoCredito } from './entity/solicitacao-credito.entity';
import { EmpresaModule } from 'src/empresa/empresa.module';
import { RepresentanteEmpresaModule } from 'src/representante-empresa/representante-empresa.module';
import { ParcelaModule } from 'src/parcela/parcela.module';
import { CreditoModule } from 'src/credito/credito.module';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
  imports: [TypeOrmModule.forFeature([SolicitacaoCredito]), EmpresaModule, RepresentanteEmpresaModule, ParcelaModule, CreditoModule, UsuarioModule],
  controllers: [SolicitacaoCreditoController],
  providers: [SolicitacaoCreditoService],
  exports: [TypeOrmModule, SolicitacaoCreditoService]
})
export class SolicitacaoCreditoModule { }
