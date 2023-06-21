import { Tipos } from "src/tipos/tipos.entity";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "marcas" })
export class Marca {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ nullable: true })
  proprietario?: string;

  @Column({ nullable: true })
  fundador?: string;

  @Column({ nullable: true, name: "data_criacao" })
  dataCriacao?: string;

  @Column({ nullable: true })
  sede?: string;

  @Column("simple-array", { name: "tipo_veiculos" })
  tipoVeiculos: Tipos[];
}
