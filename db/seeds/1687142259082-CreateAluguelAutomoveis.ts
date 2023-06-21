import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAluguelAutomoveis1687142259082 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            INSERT INTO alugueis_automoveis (veiculo_id, nomeCliente, cpf, dataInicial, dataEntrega)
            VALUES
                (1, 'João Silva', '123456789', '2023-06-01', '2023-06-05'),
                (2, 'Maria Santos', '987654321', '2023-06-02', '2023-06-04'),
                (3, 'Pedro Oliveira', '654321987', '2023-06-03', '2023-06-06'),
                (4, 'Ana Pereira', '321654987', '2023-06-04', '2023-06-07'),
                (5, 'Carlos Rodrigues', '789456123', '2023-06-05', '2023-06-08'),
                (6, 'Juliana Ferreira', '456789321', '2023-06-06', '2023-06-09'),
                (7, 'José Lima', '987123654', '2023-06-07', '2023-06-10'),
                (8, 'Amanda Costa', '321987654', '2023-06-08', '2023-06-11')
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DELETE FROM aluguel_automoveis
            WHERE nomeCliente IN ('João Silva', 'Maria Santos', 'Pedro Oliveira', 'Ana Pereira', 'Carlos Rodrigues', 'Juliana Ferreira', 'José Lima', 'Amanda Costa')
        `);
  }
}
