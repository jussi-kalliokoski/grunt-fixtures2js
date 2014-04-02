"use strict";

var MSG_CREATED_FILE = "".concat("Created file ", "%s".cyan, " containing fixtures ", "%s");

module.exports = function (grunt) {
    var _ = grunt.util._;

    grunt.registerMultiTask("fixtures2js", "Reads fixtures and generates a JS file that allows you to access the fixtures", function () {
        var options = this.options({
            head: "window.FIXTURES = ",
            tail: ";"
        });

        this.files.forEach(function (file) {
            var fixtures = {};

            file.src.forEach(function (source) {
                fixtures[source] = grunt.file.read(source);
            });

            var content = options.head + JSON.stringify(fixtures, null, "    ") + options.tail;
            grunt.file.write(file.dest, content);
            grunt.log.writeln(MSG_CREATED_FILE, file.dest, file.src.map(function (source) {
                return source.cyan;
            }).join(", "));
        });
    });
};
