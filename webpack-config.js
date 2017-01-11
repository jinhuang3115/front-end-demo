/**
 * Created by jin.huang on 17/1/10.
 */
const path = require('path');
const webpack = require('webpack');
const commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.js'
});
const UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true
    }
});

module.exports = {
    //watch: true,
    entry: {
        vendor: ['react', 'react-dom'],
        index: 'index'
    },
    output: {
        //  path: 'dist',
        filename: '[name].js',
        publicPath: "",
        chunkFilename: "[name].chunk.js",
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.jsx'],
        alias: {
            index: 'static/js/page/index/index',
            action: 'static/js/redux/actions/action',
            Header: 'static/js/component/header/header.js',
            HeaderSass: 'static/js/component/header/header.scss'
        }

    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: '/node_modules/',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg|woff|ttf|eot)$/i,
                loaders: ['url-loader?limit=100000&name=[path][name][hash:8].[ext]', 'img?minimize']
            },
            {
                test: /\.(scss|css)/,
                loaders: ['style', 'css', 'autoprefixer-loader', 'sass']
            }/*,
              {
                  test: /\.js$/, loader: "eslint-loader", exclude: [/node_modules/, /js\/lib/]
              }*/
        ],
        noParse: []
    },
    plugins: [
        commonsPlugin,
        //UglifyJsPlugin
    ],
    imagemin: {
        gifsicle: {interlaced: false},
        jpegtran: {
            progressive: true,
            arithmetic: false
        },
        optipng: {optimizationLevel: 5},
        pngquant: {
            floyd: 0.5,
            speed: 2
        },
        svgo: {
            plugins: [
                {removeTitle: true},
                {convertPathData: false}
            ]
        }
    },
    eslint: {
        configFile: '.eslintrc'
    }
};