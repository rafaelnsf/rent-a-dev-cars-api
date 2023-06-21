import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "tipos" })
export class Tipos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;
}
