import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateCouncilTypes1637433623158 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'council_types',
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
            name: 'acronym',
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
    await queryRunner.dropTable('council_types')
  }
}
