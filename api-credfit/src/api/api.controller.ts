import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiService } from './api.service';
import { UpdateApiDto } from './dto/update-api.dto';
import { CreateApiDto } from './dto/create-api.dto';
import { EmpresaService } from 'src/empresa/empresa.service';
import { RepresentanteEmpresaService } from 'src/representante-empresa/representante-empresa.service';
import { CreditoService } from 'src/credito/credito.service';
import { ParcelaService } from 'src/parcela/parcela.service';
import { SolicitacaoCreditoService } from 'src/solicitacao-credito/solicitacao-credito.service';
import { UsuarioService } from 'src/usuario/usuario.service';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService,
    private readonly usuarioService: UsuarioService,
    private readonly empresaService: EmpresaService,
    private readonly representanteCompanyService: RepresentanteEmpresaService,
    private readonly creditService: CreditoService,
    private readonly parcelService: ParcelaService,
    private readonly solicitacaoCredit: SolicitacaoCreditoService) { }

  @Post()
  async create(@Body() createApiDto: CreateApiDto) {
    const idUsuario = createApiDto.id_user;
    const usuario: Usuario = await this.usuarioService.findOne(idUsuario);
    const valueAvailable = this.usuarioService.loanAmountAvailable(usuario);
    return JSON.stringify({ usuario, valueAvailable })
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApiDto: UpdateApiDto) {
    return this.apiService.update(+id, updateApiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apiService.remove(+id);
  }
}
