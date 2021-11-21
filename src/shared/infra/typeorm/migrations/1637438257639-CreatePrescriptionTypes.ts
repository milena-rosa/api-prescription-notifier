import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreatePrescriptionTypes1637438257639 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'prescription_types',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'created_at',
            type: 'date',
            default: 'now()'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('prescription_types')
  }
}
