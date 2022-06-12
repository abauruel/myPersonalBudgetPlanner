import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class alterExpense1651445355357 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('expenses', new TableColumn({
            name: "amount",
            type: "decimal"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('expenses', 'amount')
    }

}
