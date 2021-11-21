import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreatePrescriptionTypesRegistration1637439070750 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'prescription_types_registrations',
        columns: [
          {
            name: 'prescription_type_id',
            type: 'uuid'
          },
          {
            name: 'registration_id',
            type: 'uuid'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          }
        ],
        foreignKeys: [
          {
            name: 'FKPrescriptionType',
            referencedTableName: 'prescription_types',
            referencedColumnNames: ['id'],
            columnNames: ['prescription_type_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          },
          {
            name: 'FKRegistration',
            referencedTableName: 'registrations',
            referencedColumnNames: ['id'],
            columnNames: ['registration_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('prescription_types_registrations')
  }
}
