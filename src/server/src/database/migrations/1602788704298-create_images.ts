import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1602788704298 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'IMAGES',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'path',
          type: 'varchar'
        },
        {
          name: 'orphanage_id',
          type: 'integer'
        }
      ],
      foreignKeys: [
        {
          name: 'ImageOrphanage',
          columnNames: ['orphanage_id'],
          referencedTableName: 'ORPHANAGES',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('IMAGES');
  }

}
