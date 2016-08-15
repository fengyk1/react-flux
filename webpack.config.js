var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包

module.exports = {
    entry : './src/app.jsx',
    output : {
        path : __dirname + '/build',
        filename : 'app.js'
    },
    watch : true,
    module : {
        loaders : [
            {
                test : /\.js$/,
                exclude : /^node_modules/,
                loader : 'babel?presets=es2015'
            },
            {
                test: /\.css$/,
                exclude: /^node_modules$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader')
            },
            {
                test: /\.less/,
                exclude: /^node_modules$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!less-loader')
            },
            {
                test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
                exclude: /^node_modules$/,
                loader: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /^node_modules$/,
                loader: 'url?limit=20000&name=[name].[ext]' //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
            },
            {
                test: /\.jsx$/,
                exclude: /^node_modules$/,
                loaders: ['jsx', 'babel?presets[]=es2015,presets[]=react']
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'], //后缀名自动补全
    }

}