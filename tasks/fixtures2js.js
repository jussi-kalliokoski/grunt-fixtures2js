"use strict";

var MSG_CREATED_FILE = "".concat("Created file ", "%s".cyan, " containing fixtures ", "%s");

module.exports = function (grunt) {
    grunt.registerMultiTask("fixtures2js", "Reads fixtures and generates a JS file that allows you to access the fixtures", function () {
        var _ = require("lodash");
        var stringify = require("./lib/stringify");
        var process = require("./lib/process");

        var options = this.options({
            head: "window.FIXTURES = ",
            tail: ";",
            postProcessors: {}
        });

        this.files.forEach(function (file) {
            var fixtures = {};

            file.src.forEach(function (source) {
                fixtures[source] = process(source, options.postProcessors);
            });

            var content = options.head + stringify(fixtures) + options.tail;
            grunt.file.write(file.dest, content);
            grunt.log.writeln(MSG_CREATED_FILE, file.dest, file.src.map(function (source) {
                return source.cyan;
            }).join(", "));
        });
    });
};
