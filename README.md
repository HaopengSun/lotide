# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @haopengsun/lotide`

**Require it:**

`const _ = require('@haopengsun/lotide');`

**Call it:**

`const results = _.head([1, 2, 3]) // => [1]`
`const results = _.middle([1, 2, 3]) // => [2]`
`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `asserEqual()`: return whether two variables are equal
* `assertArraysEqual()`: return whether two arrays are equal
* `asserObejctsEqual()`: return whether two objects are equal
* `head(), middle(),tail()`:return the first, middle and end element of an array