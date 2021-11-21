"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Registration = void 0;

var _uuid = require("uuid");

var _typeorm = require("typeorm");

var _CouncilType = require("./CouncilType");

var _Address = require("./Address");

var _PrescriptionType = require("./PrescriptionType");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let Registration = (_dec = (0, _typeorm.Entity)('registrations'), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", []), _dec4 = (0, _typeorm.PrimaryColumn)(), _dec5 = Reflect.metadata("design:type", String), _dec6 = (0, _typeorm.Column)(), _dec7 = Reflect.metadata("design:type", String), _dec8 = (0, _typeorm.Column)(), _dec9 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec10 = (0, _typeorm.ManyToMany)(() => _PrescriptionType.PrescriptionType), _dec11 = (0, _typeorm.JoinTable)({
  name: 'prescription_types_registrations',
  joinColumns: [{
    name: 'registration_id'
  }],
  inverseJoinColumns: [{
    name: 'prescription_type_id'
  }]
}), _dec12 = Reflect.metadata("design:type", Array), _dec13 = (0, _typeorm.Column)(), _dec14 = Reflect.metadata("design:type", String), _dec15 = (0, _typeorm.Column)(), _dec16 = Reflect.metadata("design:type", String), _dec17 = (0, _typeorm.Column)(), _dec18 = Reflect.metadata("design:type", String), _dec19 = (0, _typeorm.Column)(), _dec20 = Reflect.metadata("design:type", String), _dec21 = (0, _typeorm.Column)(), _dec22 = Reflect.metadata("design:type", String), _dec23 = (0, _typeorm.Column)(), _dec24 = Reflect.metadata("design:type", String), _dec25 = (0, _typeorm.ManyToOne)(() => _CouncilType.CouncilType), _dec26 = (0, _typeorm.JoinColumn)({
  name: 'council_type_id'
}), _dec27 = Reflect.metadata("design:type", typeof _CouncilType.CouncilType === "undefined" ? Object : _CouncilType.CouncilType), _dec28 = (0, _typeorm.Column)(), _dec29 = Reflect.metadata("design:type", String), _dec30 = (0, _typeorm.Column)(), _dec31 = Reflect.metadata("design:type", String), _dec32 = (0, _typeorm.Column)(), _dec33 = Reflect.metadata("design:type", String), _dec34 = (0, _typeorm.Column)(), _dec35 = Reflect.metadata("design:type", String), _dec36 = (0, _typeorm.Column)(), _dec37 = Reflect.metadata("design:type", String), _dec38 = (0, _typeorm.ManyToOne)(() => _Address.Address), _dec39 = (0, _typeorm.JoinColumn)({
  name: 'business_address_id'
}), _dec40 = Reflect.metadata("design:type", typeof _Address.Address === "undefined" ? Object : _Address.Address), _dec41 = (0, _typeorm.Column)(), _dec42 = Reflect.metadata("design:type", String), _dec43 = (0, _typeorm.ManyToOne)(() => _Address.Address), _dec44 = (0, _typeorm.JoinColumn)({
  name: 'home_address_id'
}), _dec45 = Reflect.metadata("design:type", typeof _Address.Address === "undefined" ? Object : _Address.Address), _dec46 = (0, _typeorm.Column)(), _dec47 = Reflect.metadata("design:type", String), _dec48 = (0, _typeorm.CreateDateColumn)(), _dec49 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class Registration {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "registration_number", _descriptor2, this);

    _initializerDefineProperty(this, "registration_date", _descriptor3, this);

    _initializerDefineProperty(this, "prescription_types", _descriptor4, this);

    _initializerDefineProperty(this, "record_number_a", _descriptor5, this);

    _initializerDefineProperty(this, "record_number_b", _descriptor6, this);

    _initializerDefineProperty(this, "professional_or_institution_name", _descriptor7, this);

    _initializerDefineProperty(this, "technical_or_clinical_director", _descriptor8, this);

    _initializerDefineProperty(this, "professional_council_register", _descriptor9, this);

    _initializerDefineProperty(this, "council_type_id", _descriptor10, this);

    _initializerDefineProperty(this, "council_type", _descriptor11, this);

    _initializerDefineProperty(this, "specialty", _descriptor12, this);

    _initializerDefineProperty(this, "telephone_number", _descriptor13, this);

    _initializerDefineProperty(this, "cellphone_number", _descriptor14, this);

    _initializerDefineProperty(this, "email", _descriptor15, this);

    _initializerDefineProperty(this, "business_address_id", _descriptor16, this);

    _initializerDefineProperty(this, "business_address", _descriptor17, this);

    _initializerDefineProperty(this, "home_address_id", _descriptor18, this);

    _initializerDefineProperty(this, "home_address", _descriptor19, this);

    _initializerDefineProperty(this, "comments", _descriptor20, this);

    _initializerDefineProperty(this, "created_at", _descriptor21, this);

    if (!this.id) {
      this.id = (0, _uuid.v4)();
    }
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "registration_number", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "registration_date", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "prescription_types", [_dec10, _dec11, _dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "record_number_a", [_dec13, _dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "record_number_b", [_dec15, _dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "professional_or_institution_name", [_dec17, _dec18], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "technical_or_clinical_director", [_dec19, _dec20], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "professional_council_register", [_dec21, _dec22], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "council_type_id", [_dec23, _dec24], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "council_type", [_dec25, _dec26, _dec27], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "specialty", [_dec28, _dec29], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "telephone_number", [_dec30, _dec31], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "cellphone_number", [_dec32, _dec33], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "email", [_dec34, _dec35], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "business_address_id", [_dec36, _dec37], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "business_address", [_dec38, _dec39, _dec40], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "home_address_id", [_dec41, _dec42], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "home_address", [_dec43, _dec44, _dec45], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "comments", [_dec46, _dec47], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "created_at", [_dec48, _dec49], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class) || _class) || _class);
exports.Registration = Registration;