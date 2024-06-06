import { PrimaryColumn, Entity, OneToOne, JoinColumn } from 'typeorm';
import { Empresa } from "../../empresa/entities/empresa.entity"
import { Usuario } from "../../usuario/entities/usuario.entity";

@Entity('representante_empresa')
export class RepresentanteEmpresa {
    @PrimaryColumn()
    @OneToOne(() => Usuario)
    @JoinColumn({ name: 'usuario_id' })
    usuario_id: number;

    @PrimaryColumn()
    @OneToOne(() => Empresa)
    @JoinColumn({ name: 'empresa_id' })
    empresa_id: number;


    constructor(representante: Partial<RepresentanteEmpresa>) {
        Object.assign(this, representante);
    }
}
