var path = require("path")
var webpack = require("webpack")

module.exports = {
    entry: './public/js/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/dist/')
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: { presets: ['es2015'] }
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            }
        ],
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            // compress: {
            //     warnings: true, // this will warn about dead code in 3rd party libraries, change to false to ignore
            // },
            compress: false,
            output: {
                comments: true
            },
            mangle: false
            // mangle: {
            //     mangle: false
            // }
        }),
    ],
    devtool: 'inline-source-map'
}
