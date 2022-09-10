const path = require("path");
module.exports = {
    entry: path.resolve(__dirname, './src/index.ts'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [{ loader: 'style-loader', options: { injectType: 'styleTag' } }, 'css-loader'],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
}