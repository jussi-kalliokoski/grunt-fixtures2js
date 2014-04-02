"use strict";

var grunt = require("grunt");
var path = require("path");

exports.fixture2js = {
    setUp: function (done) {
        done();
    },

    defaultOptions: function (test) {
        var testCases = grunt.file.glob.sync(path.join(__dirname, "expected", "*"));

        testCases.forEach(function (testCase) {
            var expected = grunt.file.read(testCase);
            var actual = grunt.file.read(path.join(__dirname, "actual", path.basename(testCase)));
            test.equal(actual, expected, path.basename(testCase));
        });

        test.done();
    }
};
