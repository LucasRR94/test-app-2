import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { IsInt, Min, Max, } from "class-validator"
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity('credito')
export class Credito {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Usuario, usuario => usuario.id, { nullable: false })
    usuario_id: number;

    @Column({ type: 'int' })
    @IsInt()
    @Min(0)
    @Max(1000)
    score: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    salario_usuario: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.0 })
    valor_disponivel: number;

    @Column({ type: 'int', default: 0 })
    @IsInt()
    @Min(0)
    @Max(4)
    numero_de_parcelas: number;

    constructor(user: Partial<Credito>) {
        Object.assign(this, user);
    }
}
