import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAluguelAutomoveis1687142259082 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            INSERT INTO alugueis_automoveis (nome_cliente, cpf, data_inicial, data_entrega, veiculo_id)
            VALUES
                ('João Silva', '123456789', '2023-06-01', '2023-06-05', 1),
                ('Maria Santos', '987654321', '2023-06-02', '2023-06-040', 2),
                ('Pedro Oliveira', '654321987', '2023-06-03', '2023-06-06', 3),
                ('Ana Pereira', '321654987', '2023-06-04', '2023-06-07', 4)
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DELETE FROM aluguel_automoveis
            WHERE nomeCliente IN ('João Silva', 'Maria Santos', 'Pedro Oliveira', 'Ana Pereira', 'Carlos Rodrigues', 'Juliana Ferreira', 'José Lima', 'Amanda Costa')
        `);
  }
}
