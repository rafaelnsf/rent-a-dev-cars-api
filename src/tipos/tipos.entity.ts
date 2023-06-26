import { Marca } from "src/marca/marca.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity({ name: "tipos" })
export class Tipos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;
}
