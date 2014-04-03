"use strict";

var MSG_CREATED_FILE = "".concat("Created file ", "%s".cyan, " containing fixtures ", "%s");

module.exports = function (grunt) {
    grunt.registerMultiTask("fixtures2js", "Reads fixtures and generates a JS file that allows you to access the fixtures", function () {
        var fs = require("fs");
        var fixtures2js = require("fixtures2js");
        var options = this.options();

        this.files.forEach(function (file) {
            var fixtures = fixtures2js(options);

            file.src.forEach(function (source) {
                fixtures.addFixture(source, fs.readFileSync(source));
            });

            var content = fixtures.finish().toString("utf8");
            grunt.file.write(file.dest, content);
            grunt.log.writeln(MSG_CREATED_FILE, file.dest, file.src.map(function (source) {
                return source.cyan;
            }).join(", "));
        });
    });
};
