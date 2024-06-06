import { Injectable, NotFoundException } from '@nestjs/common';
import { EvaluationSolicitacaoCreditoDto } from './dto/evaluation-solicitacao-credito.dto';
import { UpdateSolicitacaoCreditoDto } from './dto/update-solicitacao-credito.dto';
import { EntityManager, Repository } from 'typeorm';
import { SolicitacaoCredito } from './entity/solicitacao-credito.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { UsuarioService } from 'src/usuario/usuario.service';
import { CreateSolicitacaoCreditoDto } from './dto/create-solicitacao-credito.dto';

@Injectable()
export class SolicitacaoCreditoService {
    constructor(
        @InjectRepository(SolicitacaoCredito)
        private readonly solicitacaoCreditoRepository: Repository<SolicitacaoCredito>,
        private readonly usuarioService: UsuarioService,
        private readonly entityManager: EntityManager) {
    }

    async create(evaluationUser: EvaluationSolicitacaoCreditoDto) {
        const idUsuario = evaluationUser.id_user;
        const usuario: Usuario = await this.usuarioService.findOne(idUsuario);
        const valueAvailable = this.usuarioService.loanAmountAvailable(usuario);
        const solicita = new CreateSolicitacaoCreditoDto();
        solicita.usuario_solicitante = idUsuario;
        solicita.credito_id = null;
        solicita.data_analise = null;
        solicita.data_solicitacao = new Date();
        const solicitacao = new SolicitacaoCredito(solicita)
        this.entityManager.save(solicitacao);
        return JSON.stringify({ nomeCompleto: usuario.nome_completo, valueAvailable })
    }

    async findAll() {
        return this.solicitacaoCreditoRepository.find();
    }

    async findOne(id: number) {
        return this.solicitacaoCreditoRepository.findOneBy({ id })
    }

    async findByUser(user_id: number) {
        return this.solicitacaoCreditoRepository.find({ where: { usuario_solicitante: user_id } })
    }

    async update(id: number, UpdateSolicitacaoCreditoDto: UpdateSolicitacaoCreditoDto) {
        const user = await this.solicitacaoCreditoRepository.findOneBy({ id });
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        Object.keys(UpdateSolicitacaoCreditoDto).forEach((prop) => {
            if (UpdateSolicitacaoCreditoDto[prop]) {
                user[prop] = UpdateSolicitacaoCreditoDto[prop];
            }
        });
        await this.entityManager.save(user);
    }

    async remove(id: number) {
        await this.solicitacaoCreditoRepository.delete(id)
    }

}
