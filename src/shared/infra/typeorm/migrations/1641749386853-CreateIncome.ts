import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateIncome1641749386853 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "incomes",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar",
                    isNullable: false
                }, {
                    name: "idgroup",
                    type: "varchar"
                },
                {
                    name: "idsubcategory",
                    type: "integer"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }))

        await queryRunner.createForeignKeys('incomes', [
            new TableForeignKey({
                columnNames: ["idgroup"],
                referencedColumnNames: ["id"],
                referencedTableName: "groups"
            }),
            new TableForeignKey({
                columnNames: ["idsubcategory"],
                referencedColumnNames: ["id"],
                referencedTableName: "subcategories"
            })
        ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("incomes")
        const fkGroup = table.foreignKeys.find(fk => fk.columnNames.indexOf("idgroup"))
        const fksubcategory = table.foreignKeys.find(fk => fk.columnNames.indexOf("idsubcategory"))
        await queryRunner.dropForeignKeys("incomes", [fkGroup, fksubcategory])
        await queryRunner.dropTable("incomes")
    }

}
