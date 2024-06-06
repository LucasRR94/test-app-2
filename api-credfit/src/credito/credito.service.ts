import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Credito } from './entity/credito.entity';
import { CreateCreditoDto } from './dto/create-credito.dto';
import { UpdateCreditoDto } from './dto/update-credito.dto';

@Injectable()
export class CreditoService {
    constructor(
        @InjectRepository(Credito)
        private readonly creditRepository: Repository<Credito>,
        private readonly entityManager: EntityManager
    ) { }

    async create(createCreditoDto: CreateCreditoDto) {
        const credito = new Credito(createCreditoDto)
        await this.entityManager.save(credito);
        return 'Created new credit';
    }

    async findAll(): Promise<Credito[]> {
        return this.creditRepository.find();
    }

    async findOne(id: number): Promise<Credito> {
        const credito = await this.creditRepository.findOneBy({ id });
        if (!credito) {
            throw new NotFoundException(`Credito with ID ${id} not found`);
        }
        return credito;
    }

    async update(id: number, updateCreditoDto: UpdateCreditoDto) {
        const credito = await this.creditRepository.findOneBy({ id });
        Object.assign(credito, updateCreditoDto);
        return this.entityManager.save(credito);
    }

    async remove(id: number) {
        await this.creditRepository.delete(id)
    }
}
