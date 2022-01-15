import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateSubCategory1641743305143 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'subcategories',
            columns: [{
                name: "id",
                type: "integer",
                isPrimary: true,
                isGenerated: true
            },
            {
                name: "name",
                type: "varchar",
                isNullable: false
            },
            {
                name: "idcategory",
                type: "integer",
            }
            ]
        }))

        await queryRunner.createForeignKey("subcategories", new TableForeignKey({
            columnNames: ["idcategory"],
            referencedColumnNames: ["id"],
            referencedTableName: "categories",
            onDelete: "NO ACTION",
            onUpdate: "CASCADE"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("subcategories");
        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("idCategory") !== -1);
        await queryRunner.dropForeignKey("subcategories", foreignKey);
        await queryRunner.dropTable("subcategories")
    }

}
