import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePaymentType1641747258871 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "paymentTypes",
            columns: [{
                name: "id",
                type: "integer",
                isPrimary: true,
                isGenerated: true,
            },
            {
                name: "name",
                type: "varchar"
            }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("paymentTypes")
    }

}
