"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreatePrescriptionTypesRegistration1637439070750 = void 0;

var _typeorm = require("typeorm");

class CreatePrescriptionTypesRegistration1637439070750 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'prescription_types_registrations',
      columns: [{
        name: 'prescription_type_id',
        type: 'uuid'
      }, {
        name: 'registration_id',
        type: 'uuid'
      }, {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()'
      }],
      foreignKeys: [{
        name: 'FKPrescriptionType',
        referencedTableName: 'prescription_types',
        referencedColumnNames: ['id'],
        columnNames: ['prescription_type_id'],
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL'
      }, {
        name: 'FKRegistration',
        referencedTableName: 'registrations',
        referencedColumnNames: ['id'],
        columnNames: ['registration_id'],
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL'
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable('prescription_types_registrations');
  }

}

exports.CreatePrescriptionTypesRegistration1637439070750 = CreatePrescriptionTypesRegistration1637439070750;