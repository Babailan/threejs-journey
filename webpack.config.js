const path = require("path");
module.exports = {
    entry: path.resolve(__dirname, './src/index.ts'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    devtool: 'eval',
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [{ loader: 'style-loader', options: { injectType: 'styleTag' } }, 'css-loader'],
            },
            {
                test: /\.tsx?$/i,
                use: ['ts-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/source'
            },
            {
                test: /\.gagi?$/i,
                type: 'asset/source'
            }
        ],
    },
}