require('dotenv').config()
const path = require('path');
const workingDir = __dirname + '/src';
const webpack = require('webpack');

const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin')
const portaleContext = '/PortaleWeb'
/* const context = '/PagamentiWeb'
const rest = '/pagamenti-rest' */


const plugins = [
  new webpack.ProvidePlugin({
    $: ['@sogei/react-web-components-catalog', '$']
  }),
  new HtmlWebpackPlugin({
    alwaysWriteToDisk: true,
    filename: __dirname + '/public/index.html',
    template: __dirname + '/templates/index.template.html',
    inject: 'body'
  }),
  new HtmlWebpackHarddiskPlugin(),
  new CleanWebpackPlugin(['./public/dist', './public/index.html'], {
    verbose: true,
    watch: true
  }),
  new MiniCssExtractPlugin({
    filename: "css/[name].[contenthash].css"
  }),
  new webpack.DefinePlugin({
    "process": {
      env: JSON.stringify({
        ...process.env,
        PORTALE_PATH: JSON.stringify(portaleContext)
      })
    }
  })
]

module.exports = env => {
  return {
    entry: {
      app: workingDir + '/app.jsx'
    },
    devtool: 'source-map',
    optimization: {
      splitChunks: {
        cacheGroups: {
          // Custom common chunk
          bundle: {
            name: 'commons',
            chunks: 'initial',
            minChunks: 2
          },
          // Customer vendor
          vendors: {
            chunks: 'all',
            name: 'vendors',
            test: /[\\/]node_modules[\\/](?!sogei-uikit).*[\\/]/
          }
        },
      },
    },
    plugins: plugins,
    module: {
      rules: [{
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              "presets": ["@babel/preset-env", "@babel/preset-react"],
              "plugins": [
                ["@babel/plugin-proposal-decorators", {
                  "legacy": true
                }],
                ["@babel/plugin-proposal-class-properties", {
                  "loose": true
                }]
              ]
            }
          }
        },
        {
          test: /\.css$/,
          use: [{
              loader: MiniCssExtractPlugin.loader
            },
            "css-loader"
          ]
        },
        {
          test: /\.(jpg|jpeg|gif|png|PNG)$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]',
              publicPath: '/dist/'
            }
          }]
        },
        {
          test: /\.(woff|woff2|eot|ttf|svg)$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
              publicPath: '../'
            }
          }]
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
      alias: {
        Img: path.resolve(__dirname, 'img/'),
        Css: path.resolve(__dirname, 'css/'),
        Components: path.resolve(__dirname, 'src/components/'),
        Services: path.resolve(__dirname, 'src/services/'),
        'react-router-dom': path.join(__dirname, 'node_modules/react-router-dom/')
      }
    },
    output: {
      path: __dirname + '/public/dist',
      filename: 'js/[name].bundle.[chunkhash].js',
      publicPath: '/dist',
    },
    devServer: {
      watchOptions: {
        poll: true
      },
      watchContentBase: true,
      https: true,
      open: true,
      host: 'svil.agenziaentrate.gov.it',
      historyApiFallback: true,
      contentBase: path.join(__dirname, 'public'),
      port: 3008,
    }
  }
};