import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { EntityManager, Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MAX_MARGIN_PERCENTAGE } from './constants';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuariosRepository: Repository<Usuario>,
    private readonly entityManager: EntityManager) {

  }
  private verifyMargin(user: Usuario) {
    return MAX_MARGIN_PERCENTAGE * user.salario;
  }

  private isScoreAcceptable(user: Usuario) {
    let minimalScore = 0;
    if (user.score <= 1999.99) {
      minimalScore = 400;
    }
    if (user.score > 2000 && user.score <= 3999.99) {
      minimalScore = 500;
    }
    if (user.score > 3999.99 && user.score <= 7999.99) {
      minimalScore = 600;
    }
    if (user.score > 7999.99 && user.score <= 11999.99) {
      minimalScore = 700;
    }
    return minimalScore <= user.score;
  }

  public loanAmountAvailable(user: Usuario): number {
    if (!this.isScoreAcceptable(user)) {
      return 0.0;
    }
    return this.verifyMargin(user);
  }

  async create(createUsuarioDto: CreateUsuarioDto) {
    const user = new Usuario(createUsuarioDto);
    await this.entityManager.save(user);
    return 'This action adds a new usuario';
  }

  async findOne(id: number) {
    return this.usuariosRepository.findOneBy({ id })
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const user = await this.usuariosRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    Object.keys(updateUsuarioDto).forEach((prop) => {
      if (updateUsuarioDto[prop]) {
        user[prop] = updateUsuarioDto[prop];
      }
    });
    await this.entityManager.save(user);
  }

  async remove(id: number) {
    await this.usuariosRepository.delete(id)
  }
}
