import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAutomoveis1687142243053 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            INSERT INTO automoveis (marca_id, nome, valorDiaria, valorVeiculo, kmRodado, ano)
            VALUES
                (1, 'Ford Mustang', '150', '200000', '50000', '2022'),
                (1, 'Ford Fusion', '100', '150000', '80000', '2021'),
                (2, 'Toyota Corolla', '120', '180000', '60000', '2020'),
                (2, 'Toyota Hilux', '200', '250000', '100000', '2022'),
                (3, 'Volkswagen Golf', '90', '130000', '70000', '2019'),
                (3, 'Volkswagen Tiguan', '150', '220000', '90000', '2021'),
                (4, 'Chevrolet Camaro', '200', '250000', '60000', '2022'),
                (4, 'Chevrolet Onix', '80', '100000', '40000', '2020')
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DELETE FROM automoveis
            WHERE nome IN ('Ford Mustang', 'Ford Fusion', 'Toyota Corolla', 'Toyota Hilux', 'Volkswagen Golf', 'Volkswagen Tiguan', 'Chevrolet Camaro', 'Chevrolet Onix')
        `);
  }
}
