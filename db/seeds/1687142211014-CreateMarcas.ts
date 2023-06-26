import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMarcas1687142211014 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            INSERT INTO marcas (id, nome, proprietario, fundador, data_criacao, sede, tipo_veiculos)
            VALUES
                (1, 'Ford', 'Ford Motor Company', 'Henry Ford', '1903', 'Dearborn, Michigan, Estados Unidos', '{"Sedan", "SUV", "Hatchback", "Picape", "Esportivo"}'),
                (2, 'Toyota', 'Toyota Motor Corporation', 'Kiichiro Toyoda', '1937', 'Toyota City, Aichi, Japão', '{"Sedan", "SUV", "Hatchback", "Minivan"}'),
                (3, 'Volkswagen', 'Volkswagen AG', 'Ferdinand Porsche', '1937', 'Wolfsburg, Baixa Saxônia, Alemanha', '{"Sedan", "SUV", "Hatchback", "Picape", "Esportivo"}'),
                (4, 'Chevrolet', 'General Motors', 'Louis Chevrolet, William C. Durant', '1911', 'Detroit, Michigan, Estados Unidos', '{"Sedan", "SUV", "Hatchback", "Picape", "Esportivo"}')
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DELETE FROM marcas
            WHERE nome = 'Chevrolet'
        `);
  }
}
