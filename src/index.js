export const parser = {
    argumentSchema: {
        additional: {
            "type": "object",
            "properties":{
                "argument": {
                    "type": "string",
                    "default": "default",
                    "help": "example argument extension"
                }
            }
        }
    }
}


export const webpackConfiguration = {
    builders: {
        additional({ additional }){
            return additional
        }
    },
    moduleLoaders: {
        'jpg': { test: /\.jpg$/, loader: "file-loader" },
        'common-asset': ['woff', 'tff', 'eot', 'svg', 'png', 'jpg', 'png', 'eot', 'jpg'],
    }
}


function simple({configuration, args}){
    console.log('simple test task from simple-test-polypacker-plugin/simple')
    return 'simple-test runner run successful'
}

export const tasks = {
    simple,
    simpleChain: [ 'polypacker/compile', simple, 'polypacker/run', ]
}

