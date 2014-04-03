"use strict";

module.exports = {
    default: function (buffer) {
        return JSON.stringify(buffer.toString("utf8"));
    },

    json: function (buffer) {
        return JSON.stringify(JSON.parse(buffer.toString("utf8")), null, "        ");
    },

    base64: function (buffer) {
        return JSON.stringify(buffer.toString("base64"));
    },

    arraybuffer: function (buffer) {
        return "(new Uint8Array(" + JSON.stringify([].slice.call(buffer), null, "        ") + ")).buffer";
    }
};
