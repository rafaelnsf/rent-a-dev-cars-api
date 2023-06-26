import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTypes1687726821640 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            INSERT INTO tipos (nome, descricao)
            VALUES
                ('Sedan', 'Carro de passeio com porta-malas separado da cabine'),
                ('SUV', 'Veículo utilitário esportivo com tração nas quatro rodas'),
                ('Hatchback', 'Carro de pequeno porte com porta-malas integrado à cabine'),
                ('Cupê', 'Carro de duas portas com teto rebaixado e estilo esportivo'),
                ('Conversível', 'Carro com capota retrátil ou removível'),
                ('Picape', 'Veículo com cabine para passageiros e compartimento de carga na parte traseira'),
                ('Van', 'Veículo com capacidade para transportar pessoas ou carga'),
                ('Minivan', 'Versão menor de uma van, projetada para transporte de passageiros');
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
           DELETE FROM tipos WHERE nome IN ('Sedan', 'SUV', 'Hatchback', 'Cupê', 'Conversível', 'Picape', 'Van', 'Minivan');
        `);
  }
}
