"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCouncilTypes1637433623158 = void 0;

var _typeorm = require("typeorm");

class CreateCouncilTypes1637433623158 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'council_types',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true
      }, {
        name: 'name',
        type: 'varchar'
      }, {
        name: 'acronym',
        type: 'varchar'
      }, {
        name: 'created_at',
        type: 'date',
        default: 'now()'
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable('council_types');
  }

}

exports.CreateCouncilTypes1637433623158 = CreateCouncilTypes1637433623158;