'use strict';

import { GetDateFromMoment } from './dates';

export function ConsolaLog(msg) {
  console.log(GetDateFromMoment(), ': Log ->', msg);
}
export function ConsolaError(msg) {
  console.error(GetDateFromMoment(), ': Error ->', msg);
}
export function ConsolaInfo(msg) {
  console.info(GetDateFromMoment(), ': Info ->', msg);
}

export function IsObjectEmpty(object) {
  return Object.keys(object).length === 0 && object.constructor === Object;
}

export function GroupBy(key) {
  return function group(array) {
    return array.reduce((acc, obj) => {
      const property = obj[key];
      acc[property] = acc[property] || [];
      acc[property].push(obj);
      return acc;
    }, {});
  };
}
