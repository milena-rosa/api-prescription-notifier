"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreatePrescriptionTypes1637438257639 = void 0;

var _typeorm = require("typeorm");

class CreatePrescriptionTypes1637438257639 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'prescription_types',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true
      }, {
        name: 'name',
        type: 'varchar'
      }, {
        name: 'created_at',
        type: 'date',
        default: 'now()'
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable('prescription_types');
  }

}

exports.CreatePrescriptionTypes1637438257639 = CreatePrescriptionTypes1637438257639;