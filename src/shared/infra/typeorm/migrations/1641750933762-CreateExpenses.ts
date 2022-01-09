import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateExpenses1641750933762 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'expenses',
            columns: [
                {
                    name: "id",
                    type: 'varchar',
                    isPrimary: true
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'date',
                    type: 'timestamp',
                    isNullable: false
                },
                {
                    name: 'idsubcategory',
                    type: 'integer',
                    isNullable: false
                },
                {
                    name: 'idpaymentType',
                    type: 'integer',
                    isNullable: false
                },
                {
                    name: 'idgroup',
                    type: 'varchar',
                    isNullable: false
                }, {
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

        await queryRunner.createForeignKeys('expenses', [
            new TableForeignKey({
                columnNames: ["idgroup"],
                referencedColumnNames: ["id"],
                referencedTableName: "groups"
            }),
            new TableForeignKey({
                columnNames: ["idsubcategory"],
                referencedColumnNames: ["id"],
                referencedTableName: "subcategories"
            }),
            new TableForeignKey({
                columnNames: ["idpaymentType"],
                referencedColumnNames: ["id"],
                referencedTableName: "paymentTypes"
            }),

        ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("expenses")
        const fkGroup = table.foreignKeys.find(fk => fk.columnNames.indexOf("idgroup"))
        const fksubcategory = table.foreignKeys.find(fk => fk.columnNames.indexOf("idsubcategory"))
        const fkpaymentType = table.foreignKeys.find(fk => fk.columnNames.indexOf("idpaymentType"))
        await queryRunner.dropForeignKeys("expenses", [fkGroup, fksubcategory, fkpaymentType])

        await queryRunner.dropTable("expenses")
    }

}
