import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Credito } from '../../credito/entity/credito.entity';

@Entity('solicitacao_credito')
export class SolicitacaoCredito {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Usuario, usuario => usuario.id)
    usuario_solicitante: number;

    @OneToOne(() => Credito, credito => credito.id, { nullable: true })
    credito_id: number;

    @Column({ type: 'date', nullable: true })
    data_analise: Date;

    @Column({ type: 'date', nullable: true })
    data_solicitacao: Date;

    constructor(solicitation: Partial<SolicitacaoCredito>) {
        Object.assign(this, solicitation);
    }
}
