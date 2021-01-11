//index.js

const head = require('./head.js');
const middle = require('./middle.js');
const tail = require('./tail.js');

const assertArraysEqual = require('./assertArraysEqual.js');
const assertEqual = require('./assertEqual.js');
const assertObjectsEqual = require('./assertObjectsEqual.js');

const countLetters = require('./countLetters.js');
const countOnly = require('./countOnly.js');
const eqArrays = require('./eqArrays.js');

const eqObjectsRecursive = require('./eqObjects-refactor.js');
const eqObjects = require('./eqObjects.js');
const findKey = require('./findKey.js');

const findKeyByValue = require('./findKeyByValue.js');
const flatten = require('./flatten.js');
const letterPositions = require('./letterPositions.js');

const map = require('./map.js');
const takeUntil = require('./takeUntil.js');
const without = require('./without.js');

module.exports = {
  head: head,
  tail: tail,
  middle: middle,

  assertObjectsEqual: assertObjectsEqual,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  eqObjectsRecursive: eqObjectsRecursive,
  
  countLetters: countLetters,
  countOnly: countOnly,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil,
  without: without
};
