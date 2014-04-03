"use strict";

var fs = require("fs");
var minimatch = require("minimatch");
var _ = require("lodash");
var availablePostProcessors = require("./post-processors");

var getPostProcessor = function (source, postProcessors) {
    var name = "default";

    _.each(postProcessors, function (postProcessor, pattern) {
        if ( minimatch(source, pattern) ) {
            name = postProcessor;
            return false;
        }
    });

    if ( !_.has(availablePostProcessors, name) ) {
        throw new Error("Not a post-processor: `" + name + "`");
    }

    return availablePostProcessors[name];
};

module.exports = function (source, postProcessors) {
    var buffer = fs.readFileSync(source);
    var postProcess = getPostProcessor(source, postProcessors);
    return postProcess(buffer);
};
