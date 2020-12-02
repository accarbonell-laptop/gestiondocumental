'use strict';

const { GetDateFromMoment } = require('./dates');

exports.ConsolaLog = (msg) => {
  console.log(GetDateFromMoment(), ': Log ->', msg);
};
exports.ConsolaError = (msg) => {
  console.error(GetDateFromMoment(), ': Error ->', msg);
};
exports.ConsolaInfo = (msg) => {
  console.info(GetDateFromMoment(), ': Info ->', msg);
};

exports.IsObjectEmpty = (object) => Object.keys(object).length === 0 && object.constructor === Object;

exports.GroupBy = (key) => {
  return function group(array) {
    return array.reduce((acc, obj) => {
      const property = obj[key];
      acc[property] = acc[property] || [];
      acc[property].push(obj);
      return acc;
    }, {});
  };
};
