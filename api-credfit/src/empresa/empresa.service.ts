import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Empresa } from './entities/empresa.entity';
import { CreateEmpresaDto } from './dtos/create-empresa.dto';

@Injectable()
export class EmpresaService {
    constructor(
        @InjectRepository(Empresa)
        private readonly empresaRepository: Repository<Empresa>,
        private readonly entityManager: EntityManager) { }

    async create(createEmpresaDto: CreateEmpresaDto) {
        const company = new Empresa(createEmpresaDto);
        await this.entityManager.save(company);
        return 'created new company';
    }

    async findAll(): Promise<Empresa[]> {
        return this.empresaRepository.find();
    }

    async findOne(id: number): Promise<Empresa> {
        const empresa = await this.empresaRepository.findOneBy({ id });
        if (!empresa) {
            throw new NotFoundException(`Empresa with ID ${id} not found`);
        }
        return empresa;
    }

    async remove(id: number) {
        await this.empresaRepository.delete(id)
    }
}
