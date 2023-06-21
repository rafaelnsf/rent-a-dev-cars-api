import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Automovel } from "../automoveis/automovel.entity";

@Entity({ name: "alugueis-automoveis" })
export class AluguelAutomovel {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Automovel)
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
