import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Marca } from "../marca/marca.entity";
import { AluguelAutomovel } from "src/aluguel-automovel/aluguel-automovel.entity";

@Entity({ name: "automoveis" })
export class Automovel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @ManyToOne(() => Marca, (marca) => marca.automoveis)
  @JoinColumn({ name: "marca_id" })
  marca: Marca;

  @Column({ nullable: true })
  imagemUrl?: string;

  @Column({ nullable: true, name: "valor_diaria" })
  valorDiaria?: string;

  @Column({ nullable: true, name: "valor_veiculo" })
  valorVeiculo?: string;

  @Column({ nullable: true, name: "km_rodado" })
  kmRodado?: string;

  @Column({ nullable: true })
  ano?: string;

  @OneToMany(() => AluguelAutomovel, (aluguel) => aluguel.veiculo)
  alugueis: AluguelAutomovel[];
}
