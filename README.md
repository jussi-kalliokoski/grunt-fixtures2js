# grunt-fixtures2js

[![Build Status](https://travis-ci.org/jussi-kalliokoski/grunt-fixtures2js.png?branch=master)](https://travis-ci.org/jussi-kalliokoski/grunt-fixtures2js)

Ever wondered how to access static text-based files (e.g. JSON, HTML) from your tests? grunt-fixtures2js makes things easier for you by creating a JS file out of your fixtures, containing an object where file contents mapped to their filenames. You can then just include that file in your tests and voilá!

## Installation

You can install grunt-fixtures2js via npm:

```bash
$ npm install --save-dev grunt-fixtures2js
```

## Usage

You can configure your fixtures2js tasks as follows:

```javascript
fixtures2js: {
    default: {
        files: {
            "my-fixture-file.js": "fixtures/*"
        }
    }
}
```

## Options

* `head` (defaults to `window.FIXTURES = `) a string to insert before the generated JSON.
* `tail` (defaults to `;`) a string to insert after the generated JSON.

## Examples

If you have a configuration like this:
```javascript
fixtures2js: {
    default: {
        options: {
            head: "processFixtures(",
            tail: ");"
        },
        files: {
            "my-fixture-file.js": "fixtures/*"
        }
    }
}
```

Running `grunt fixtures2js:default` will read the contents of the files in the `fixtures/` folder, and generate a `my-fixture-file.js` like this:

```javascript
processFixtures({
    "fixtures/one-fixture-file.txt": "The contents of the fixture file here",
    "fixtures/other-fixture-file.txt": "The contents of another fixture file here"
});
```
