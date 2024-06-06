import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { RepresentanteEmpresa } from './entities/representante-empresa.entity';
import { CreateRepresentanteEmpresaDto } from './dto/create-representante-empresa.dto';

@Injectable()
export class RepresentanteEmpresaService {
    constructor(
        @InjectRepository(RepresentanteEmpresa)
        private readonly representanteCompany: Repository<RepresentanteEmpresa>,
        private readonly entityManager: EntityManager) { }

    async create(createEmpresaDto: CreateRepresentanteEmpresaDto) {
        const company = new RepresentanteEmpresa(createEmpresaDto);
        await this.entityManager.save(company);
        return 'created new company';
    }

    async findAll(): Promise<RepresentanteEmpresa[]> {
        return this.representanteCompany.find();
    }

    async findOne(userId: number, empresaId: number): Promise<RepresentanteEmpresa> {
        const empresa = await this.representanteCompany.findOneBy({ usuario_id: userId, empresa_id: empresaId });
        if (!empresa) {
            throw new NotFoundException(`Empresa with user id: ${userId} , and empresa id ${empresaId} not found`);
        }
        return empresa;
    }

    async remove(id: number) {
        await this.representanteCompany.delete(id)
    }

}
