# grunt-fixtures2js

[![Build Status](https://travis-ci.org/jussi-kalliokoski/grunt-fixtures2js.png?branch=master)](https://travis-ci.org/jussi-kalliokoski/grunt-fixtures2js)

Ever wondered how to access static text-based files (e.g. JSON, HTML) from your tests? grunt-fixtures2js makes things easier for you by creating a JS file out of your fixtures, containing an object where file contents mapped to their filenames. You can then just include that file in your tests and voilá!

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
