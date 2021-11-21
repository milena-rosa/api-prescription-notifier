"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DayjsDateProvider = void 0;

var _dayjs = _interopRequireDefault(require("dayjs"));

var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dayjs.default.extend(_utc.default);

class DayjsDateProvider {
  compareInHours(startDate, endDate) {
    const endDateUtc = this.convertToUTC(endDate);
    const startDateUtc = this.convertToUTC(startDate);
    return (0, _dayjs.default)(endDateUtc).diff(startDateUtc, 'hours');
  }

  convertToUTC(date) {
    return (0, _dayjs.default)(date).utc().local().format();
  }

  dateNow() {
    return (0, _dayjs.default)().toDate();
  }

  compareInDays(startDate, endDate) {
    const endDateUtc = this.convertToUTC(endDate);
    const startDateUtc = this.convertToUTC(startDate);
    return (0, _dayjs.default)(endDateUtc).diff(startDateUtc, 'days');
  }

  addDays(days) {
    return (0, _dayjs.default)().add(days, 'days').toDate();
  }

}

exports.DayjsDateProvider = DayjsDateProvider;