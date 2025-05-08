const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const prod = process.env.NODE_ENV === 'production'

module.exports = {
    mode: prod ? 'production' : 'development',
    entry: './src/index.tsx', // entry point of the app
    output: {
        path: __dirname + '/dist/' // output directory
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader' // Transpile TypeScript files to JavaScript with Babel loader
            },
            {
                test: /\.(c|sc|sa)ss$/,
                use: [
                    prod ? MiniCssExtractPlugin.loader : 'style-loader', // Avoid extracting CSS in development mode
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'] // Resolve these extensions
    },
    devServer: {
        port: 3000 // Port for the development server
    },
    plugins: [
        new HtmlWebpackPlugin({
            // Generate an HTML file with the bundled JavaScript using index.html as template
            template: 'index.html'
        }),
        // Extract CSS into separate files in production mode
        new MiniCssExtractPlugin()
    ]
}
