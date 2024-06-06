import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Length } from 'class-validator';

@Entity('empresa')
export class Empresa {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 18 })
    @Length(18)
    cnpj: string;

    @Column({ type: 'varchar', length: 255 })
    @Length(1, 255)
    razao_social: number;

    constructor(company: Partial<Empresa>) {
        Object.assign(this, company);
    }
}
