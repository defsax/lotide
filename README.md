# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @defsax/lotide`

**Require it:**

`const _ = require('@defsax/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

__Array Fetching__

*  `head(array)`: Returns the first element
*  `tail(array)`: Returns all elements except the first
*  `middle(array)`: Returns the middle element(odd) or elements(even)

__Assertion Functions (DO NOT RETURN ANYTHING)__

*  `assertObjectsEqual(obj1, obj2)`: Compares two objects and prints pass or fail
*  `assertArraysEqual(arr1, arr2)`: Compares two arrays and prints pass or fail
*  `assertEqual(x, y)`: Compares two primitives and prints pass or fail

__Type Comparison__

*  `eqObjects(obj1, obj2)`: Compares whether two objects are equivalent
*  `eqObjectsRecursive(obj1, obj2)`: Compares whether two objects are equivalent. uses recursion.
*  `eqArrays(arr1, arr2)`: Compares whether two arrays are equivalent. also checks array lengths, and if arrays are arrays

__Useful Functions__

*  `countLetters(str)`: Counts the letters in a sentence and returns an object containing the number of times each letter is used in the sentence. Returns in the format: 
```
{
  a: 3, 
  b: 4, 
  etc...
}
```
*  `countOnly(allItems, itemsToCount)`: Takes a list of all items and a list of only the items that you want to count. Returns an object with the counted items and the number of times each one occurs. Returns in the format: 
```
{
  countedItem1: numberOfOccurances,
  countedItem2: numberOfOccurances, 
  etc...
}
```
*  `findKey(obj, callback)`: Takes an object and a callback function and returns the key if that key's value matches callback callback's requirements.
*  `findKeyByValue(obj, val)`: Takes an object and a value and returns a key if that key's pair value matches the value passed in.
*  `flatten(arr)`: Takes a multi-layered array and returns a 1-dimensional array.
*  `letterPositions(str)`: Takes a phrase or sentence and returns an object that contains letters and their relative position in a zero based array.
```
{
  a: [0], 
  b: [1, 3, 5], 
  etc...
}
```
*  `map(arr, callback)`: Takes an array and a callback and returns a list of items that have been modified by the callback
*  `takeUntil(arr, callback)`: Takes an array and a callback and returns a list of items that exist in the array until the callback. 
*  `without(arr, listToRemove)`: Takes an array and a list of items to remove. Returns an array with specified items removed.