# skewered [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

> The simplest slugify module in the universe.

## Prerequisites

Any input character that is not `a-z`, `0-9` or `-` will be lowercased or replaced with a hyphen.

* Therefore, use other modifiers beforehand, e.g. [`diacritics`](https://www.npmjs.com/package/diacritics)

Resulting values:

* Only contain `a-z`, `0-9`, `-`
* Do not contain leading or trailing hyphens
* Do not contain repeating hyphens

## Installation

```sh
$ npm install skewered
```

## Usage

```js
const skewered = require("skewered");
const before =
  "- (this),is.a+test-that*must:work;or&else#it%fails big/*/time  1'2'3 123--xyz----Möbius _";
const after =
  "this-is-a-test-that-must-work-or-else-it-fails-big-time-1-2-3-123-xyz-m-bius";

console.log(skewered(before) === after);
//=> true
```

## License

ISC © [Buster Collings](https://about.me/buster)

[npm-image]: https://badge.fury.io/js/skewered.svg
[npm-url]: https://npmjs.org/package/skewered
[travis-image]: https://travis-ci.org/busterc/skewered.svg?branch=master
[travis-url]: https://travis-ci.org/busterc/skewered
[daviddm-image]: https://david-dm.org/busterc/skewered.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/busterc/skewered
[coveralls-image]: https://coveralls.io/repos/busterc/skewered/badge.svg
[coveralls-url]: https://coveralls.io/r/busterc/skewered
