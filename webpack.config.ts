'use strict';

import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebPackPlugin from "html-webpack-plugin";
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
import MiniCssExtractPlugin from 'mini-css-extract-plugin';



// NODE_ENVがproductionかどうかの判定
const isDev = process.env.NODE_ENV !== 'production'

const config: Configuration = {
  devtool:'inline-source-map',
  target: 'web',
  context: path.join(__dirname, 'src'),
  entry: './Index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './index.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              // 必要に応じて browserslist(対象のブラウザ) とか useBuiltIns (polyfill) の設定を入れていこうな
              // ['@babel/preset-env', {browserslist: '> 0.25%, not dead'}]的な
              ['@babel/preset-env'],
              ['@babel/preset-typescript', {
                // 強制的にjsxのパースを行うオプション。
                // e.g: var hoge = <string>fuga; みたいなコードがパースできる
                isTSX: true,
                // isTSX: trueにするときは常に必須のオプション
                allExtensions: true
              }],
              ['@babel/preset-react', {
                // WIP: 後半でここ、NODE_ENVで切り替えられるように変更します
                // development: true
                development: isDev
              }]
            ]
          }
        }
      },
      {
        test: /\.scss/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
            options: {
              url: true,
            },
          },
          {
            loader:'resolve-url-loader'
          },
          {
            loader: "sass-loader",
            options:{
              sourceMap: true
            }
          },
        ],
      },
      {
        test: /\.svg$/,
        type:'asset/resource',
        // use: [
        //   '@svgr/webpack',
        //   {
        //     loader: 'file-loader',
        //     options: {
        //       name:'[path][name].[ext]'
        //     }
        //   }
        // ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'scss/[name].css'
    }),
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html"
    }),
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8080/',
        // online: false,
      },
      {
        reload: true
      }
    )
  ]

};

export default config;