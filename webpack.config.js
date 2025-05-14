const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const path = require('path')
const prod = process.env.NODE_ENV === 'production'

module.exports = {
    mode: prod ? 'production' : 'development',
    entry: './src/index.tsx', // entry point of the app
    output: {
        publicPath: '/', // public path for the app
        path: path.resolve(__dirname, 'dist') // output directory
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
                    'css-loader'
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            svgo: true
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    devServer: {
        host: 'localhost.rakuten.tv',
        port: 3000,
        allowedHosts: 'all',
        historyApiFallback: true
    },
    devtool: prod ? undefined : 'source-map',
    optimization: {
        minimizer: ['...', new CssMinimizerPlugin()]
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
