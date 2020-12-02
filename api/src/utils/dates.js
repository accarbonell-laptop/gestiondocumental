var moment = require('moment');

exports.GetDateFromMoment = (date) => moment(date).format('DD-MM-YYYY MM:ss:SSS');
exports.FormatForSequelizeDateType = (date) => moment(date).format('YYYY-MM-DD MM:ss:SSS');
