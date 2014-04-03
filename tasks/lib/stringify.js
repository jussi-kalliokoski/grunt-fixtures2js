"use strict";

var _ = require("lodash");

module.exports = function (object) {
    return "{" + _.map(object, function (value, key) {
        return "\n    " + JSON.stringify(key) + ": " + value;
    }).join(",") + "\n}";
};
