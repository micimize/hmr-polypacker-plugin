"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var parser = exports.parser = {
    argumentSchema: {
        "type": "object",
        "properties": {
            "additional": {
                "type": "string",
                "default": "default",
                "help": "example argument extension"
            },
            "another": {
                "type": "string",
                "help": "example argument extension with no default"
            }
        }
    },
    presets: {
        ADDITIONAL: function ADDITIONAL(args) {
            args.another = args.another || 'default from preset';
            return args;
        }
    }
};

var webpackConfiguration = exports.webpackConfiguration = {
    builders: {
        additional: function additional(_ref) {
            var _additional = _ref.additional;

            return _additional;
        }
    },
    moduleLoaders: {
        'jpg': { test: /\.jpg$/, loader: "file-loader" },
        'common-asset': ['woff', 'tff', 'eot', 'svg', 'png', 'jpg', 'png', 'eot', 'jpg']
    }
};

function simple(_ref2) {
    var configuration = _ref2.configuration;
    var args = _ref2.args;

    console.log('simple test task from simple-test-polypacker-plugin/simple');
    return 'simple-test runner run successful';
}

var tasks = exports.tasks = {
    simple: simple,
    simpleChain: ['polypacker/compile', simple, 'polypacker/run']
};