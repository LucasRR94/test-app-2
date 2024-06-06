import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsEmail, IsInt, Length, Max, Min } from 'class-validator';

@Entity('usuario')
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    @Length(1, 255)
    nome_completo: string;

    @Column({ type: 'int', nullable: true })
    empresa_id: number;

    @Column({ type: 'varchar', length: 14, unique: true })
    cpf: string;

    @Column({ type: 'varchar', length: 255, unique: true })
    @Length(11, 14)
    e_mail: string;

    @Column({ type: 'varchar', length: 255 })
    @IsEmail()
    @Length(1, 255)
    hash_senha: string;

    @Column({ type: 'varchar', length: 255 })
    @Length(1, 255)
    salt: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    salario: number;

    @Column({ type: 'int' })
    @IsInt()
    @Min(0)
    @Max(1000)
    score: number;

    constructor(user: Partial<Usuario>) {
        Object.assign(this, user);
    }
}
