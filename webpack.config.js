const path = require('path')

module.exports = {

    mode: 'development',
    entry: path.resolve(__dirname, 'src/js/index.js'),
    ouput: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
}