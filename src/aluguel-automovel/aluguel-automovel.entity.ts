import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Automovel } from "../automoveis/automovel.entity";

@Entity({ name: "alugueis_automoveis" })
export class AluguelAutomovel {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Automovel, (automovel) => automovel.alugueis)
  @JoinColumn({ name: "veiculo_id" })
  veiculo: Automovel;

  @Column({ name: "nome_cliente" })
  nomeCliente: string;

  @Column({ nullable: true })
  cpf?: string;

  @Column({ nullable: true, name: "data_inicial" })
  dataInicial?: string;

  @Column({ nullable: true, name: "data_entrega" })
  dataEntrega?: string;
}
