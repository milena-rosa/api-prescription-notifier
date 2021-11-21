import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateRegistrations1637435973911 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'registrations',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'registration_number',
            type: 'varchar'
          },
          {
            name: 'registration_date',
            type: 'timestamp'
          },
          {
            name: 'record_number_a',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'record_number_b',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'professional_or_institution_name',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'technical_or_clinical_director',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'professional_council_register',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'council_type_id',
            type: 'uuid'
          },
          {
            name: 'specialty',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'telephone_number',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'cellphone_number',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'business_address_id',
            type: 'uuid',
            isNullable: true
          },
          {
            name: 'home_address_id',
            type: 'uuid'
          },
          {
            name: 'comments',
            type: 'varchar'
          },
          {
            name: 'created_at',
            type: 'date',
            default: 'now()'
          }
        ],
        foreignKeys: [
          {
            name: 'FKCouncilType',
            referencedTableName: 'council_types',
            referencedColumnNames: ['id'],
            columnNames: ['council_type_id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
          },
          {
            name: 'FKBusinessAddress',
            referencedTableName: 'addresses',
            referencedColumnNames: ['id'],
            columnNames: ['business_address_id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
          },
          {
            name: 'FKHomeAddress',
            referencedTableName: 'addresses',
            referencedColumnNames: ['id'],
            columnNames: ['home_address_id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('registrations')
  }
}
