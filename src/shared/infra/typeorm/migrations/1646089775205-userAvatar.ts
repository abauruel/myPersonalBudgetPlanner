import { Column, MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class userAvatar1646089775205 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('users', new TableColumn({
            name: "avatar",
            type: 'varchar'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'avatar')
    }

}
