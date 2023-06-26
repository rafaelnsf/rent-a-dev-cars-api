import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDB1687732398156 implements MigrationInterface {
    name = 'CreateDB1687732398156'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "marcas" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "proprietario" character varying, "fundador" character varying, "data_criacao" character varying, "sede" character varying, "tipo_veiculos" text NOT NULL, CONSTRAINT "PK_0dabf9ed9a15bfb634cb675f7d4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "automoveis" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "imagemUrl" character varying, "valor_diaria" character varying, "valor_veiculo" character varying, "km_rodado" character varying, "ano" character varying, "marca_id" integer, CONSTRAINT "PK_55fce725dbf5ee1fa728b153c1c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "alugueis-automoveis" ("id" SERIAL NOT NULL, "nome_cliente" character varying NOT NULL, "cpf" character varying, "data_inicial" character varying, "data_entrega" character varying, "veiculo_id" integer, CONSTRAINT "PK_ea930fe722df371a1cf72224012" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tipos" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "descricao" character varying NOT NULL, CONSTRAINT "PK_9e292aa5abcebee247bc9193b55" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "automoveis" ADD CONSTRAINT "FK_ed612b4a82625f5ddc79b313edb" FOREIGN KEY ("marca_id") REFERENCES "marcas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "alugueis-automoveis" ADD CONSTRAINT "FK_c0371cf2912fe0d78d7263d0118" FOREIGN KEY ("veiculo_id") REFERENCES "automoveis"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "alugueis-automoveis" DROP CONSTRAINT "FK_c0371cf2912fe0d78d7263d0118"`);
        await queryRunner.query(`ALTER TABLE "automoveis" DROP CONSTRAINT "FK_ed612b4a82625f5ddc79b313edb"`);
        await queryRunner.query(`DROP TABLE "tipos"`);
        await queryRunner.query(`DROP TABLE "alugueis-automoveis"`);
        await queryRunner.query(`DROP TABLE "automoveis"`);
        await queryRunner.query(`DROP TABLE "marcas"`);
    }

}
