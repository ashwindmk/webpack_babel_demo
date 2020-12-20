const path = require('path');

module.exports = {
    target: 'es5',
    mode: 'development',
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env']
                        ]
                    }
                },
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
}
