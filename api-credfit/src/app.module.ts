import { Module } from '@nestjs/common';
import configuration from "./config/configuration";
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ApiModule } from './api/api.module';
import { SolicitacaoCredito } from './solicitacao-credito/entity/solicitacao-credito.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Torna o ConfigService disponível globalmente
      load: [configuration]
    }),
    SolicitacaoCredito,
    UsuarioModule,
    DatabaseModule,
    ApiModule,
  ],
})

export class AppModule { }
