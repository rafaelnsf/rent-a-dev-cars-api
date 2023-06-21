import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Marca } from "../marca/marca.entity";

@Entity({ name: "automoveis" })
export class Automovel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @ManyToOne(() => Marca)
  marca: Marca;

  @Column({ nullable: true, name: "valor_diaria" })
  valorDiaria?: string;

  @Column({ nullable: true, name: "valor_veiculo" })
  valorVeiculo?: string;

  @Column({ nullable: true, name: "km_rodado" })
  kmRodado?: string;

  @Column({ nullable: true })
  ano?: string;
}
