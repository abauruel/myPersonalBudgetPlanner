import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCategory1641130434710 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "categories",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true,
                    isUnique: true
                },
                {
                    name: "name",
                    type: "varchar"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("categories")
    }

}
