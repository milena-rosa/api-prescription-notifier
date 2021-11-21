import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateAddresses1637373436104 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'addresses',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'street',
            type: 'varchar'
          },
          {
            name: 'number',
            type: 'varchar'
          },
          {
            name: 'complement',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'district',
            type: 'varchar'
          },
          {
            name: 'cep',
            type: 'varchar'
          },
          {
            name: 'city',
            type: 'varchar'
          },
          {
            name: 'uf',
            type: 'varchar'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('addresses')
  }
}
