const { config } = require('@swc/core/spack')


module.exports = config({
    entry: {
        'lib': __dirname + '/src/index.ts',
    },
    output: {
        path: __dirname + '/lib'
    },
    module: {},
});