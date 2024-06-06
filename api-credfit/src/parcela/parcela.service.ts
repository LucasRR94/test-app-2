import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateParcelaDto } from './dto/create-parcela.dto';
import { UpdateParcelaDto } from './dto/update-parcela.dto';
import { EntityManager, Repository } from 'typeorm';
import { Parcela } from './entities/parcela.entity';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class ParcelaService {
    constructor(
        @InjectRepository(Parcela)
        private readonly parcelaRepository: Repository<Parcela>,
        private readonly entityManager: EntityManager) {
    }

    async create(createParcelaDto: CreateParcelaDto) {
        const user = new Parcela(createParcelaDto);
        await this.entityManager.save(user);
        return 'This action adds a new usuario';
    }

    async findAll() {
        return this.parcelaRepository.find();
    }

    async findOne(id: number) {
        return this.parcelaRepository.findOneBy({ id })
    }

    async update(id: number, UpdateParcelaDto: UpdateParcelaDto) {
        const user = await this.parcelaRepository.findOneBy({ id });
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        Object.keys(UpdateParcelaDto).forEach((prop) => {
            if (UpdateParcelaDto[prop]) {
                user[prop] = UpdateParcelaDto[prop];
            }
        });
        await this.entityManager.save(user);
    }

    async remove(id: number) {
        await this.parcelaRepository.delete(id)
    }
}
