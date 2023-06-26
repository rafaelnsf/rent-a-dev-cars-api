import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAutomoveis1687142243053 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          INSERT INTO automoveis (id, nome, "imagemUrl", valor_diaria, valor_veiculo, km_rodado, ano, marca_id)
          VALUES
              (1, 'Ford Mustang', 'https://bocamafrapremium.com.br/wp-content/uploads/2022/12/0ca1d79e29f24328a7fb3a9f26423653_1669233237564.jpg', '150', '200000', '50000', '2022', 1),
              (2, 'Toyota Hilux', 'https://bocamafrapremium.com.br/wp-content/uploads/2022/12/0ca1d79e29f24328a7fb3a9f26423653_1669233237564.jpg', '200', '250000', '100000', '2022', 2),
              (3, 'Volkswagen Tiguan', 'https://bocamafrapremium.com.br/wp-content/uploads/2022/12/0ca1d79e29f24328a7fb3a9f26423653_1669233237564.jpg', '150', '220000', '90000', '2021', 3),
              (4, 'Chevrolet Onix', 'https://bocamafrapremium.com.br/wp-content/uploads/2022/12/0ca1d79e29f24328a7fb3a9f26423653_1669233237564.jpg', '80', '100000', '40000', '2020', 4);
          `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DELETE FROM automoveis
            WHERE nome IN ('Ford Mustang', 'Ford Fusion', 'Toyota Corolla', 'Toyota Hilux', 'Volkswagen Golf', 'Volkswagen Tiguan', 'Chevrolet Camaro', 'Chevrolet Onix')
        `);
  }
}
