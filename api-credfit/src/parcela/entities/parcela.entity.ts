import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Min, Max } from "class-validator";
import { Credito } from '../../credito/entity/credito.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity('parcela')
export class Parcela {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', default: 0 })
    @Min(0)
    @Max(4)
    numero_parcela: number;

    @Column({ type: 'varchar', length: 255, default: 'pendente' })
    status_parcela: string;

    @OneToOne(() => Credito, credito => credito.id)
    credito_id: number;

    @OneToOne(() => Usuario, usuario => usuario.id)
    usuario_id: number;

    @Column({ type: 'date' })
    data_vencimento: Date;

    constructor(user: Partial<Parcela>) {
        Object.assign(this, user);
    }
}
