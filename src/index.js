import BundleTracker from 'webpack-bundle-tracker'

function obj(props){
    return {
        "type": "object",
        "properties": props
    }
}

const argumentSchema = obj({
    bundleTracker: obj({
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
        },
    })
})

export { argumentSchema }

export function webpackBuilder({ bundleTracker }){
    return { plugins: [ new BundleTracker(bundleTracker) ] }
}
