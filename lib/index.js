"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.argumentSchema = undefined;
exports.webpackBuilder = webpackBuilder;

var _webpackBundleTracker = require("webpack-bundle-tracker");

var _webpackBundleTracker2 = _interopRequireDefault(_webpackBundleTracker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function obj(props) {
    return {
        "type": "object",
        "properties": props
    };
}

var argumentSchema = obj({
    bundleTracker: obj({
        "path": {
            "type": "string",
            "default": process.cwd(),
            "help": "the base bath to write the bundle file to"
        },
        "filename": {
            "type": "string",
            "default": "webpack-stats.json",
            "help": "where to write the bundle information to"
        },
        "logTime": {
            "type": "boolean",
            "default": false,
            "help": "whether to log how long the build takes"
        },
        "indent": {
            "type": "integer",
            "help": "optional indentation to add to the bundle for legibility"
        }
    })
});

exports.argumentSchema = argumentSchema;
function webpackBuilder(_ref) {
    var bundleTracker = _ref.bundleTracker;

    return { plugins: [new _webpackBundleTracker2.default(bundleTracker)] };
}