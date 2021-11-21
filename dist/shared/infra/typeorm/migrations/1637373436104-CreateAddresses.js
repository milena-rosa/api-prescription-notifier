"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateAddresses1637373436104 = void 0;

var _typeorm = require("typeorm");

class CreateAddresses1637373436104 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'addresses',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true
      }, {
        name: 'street',
        type: 'varchar'
      }, {
        name: 'number',
        type: 'varchar'
      }, {
        name: 'complement',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'district',
        type: 'varchar'
      }, {
        name: 'cep',
        type: 'varchar'
      }, {
        name: 'city',
        type: 'varchar'
      }, {
        name: 'uf',
        type: 'varchar'
      }, {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()'
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable('addresses');
  }

}

exports.CreateAddresses1637373436104 = CreateAddresses1637373436104;