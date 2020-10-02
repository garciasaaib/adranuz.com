const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {filename: 'app.bundle.js'},
  module: {
    rules: [
      {
        test: /\.js$/, //todos los archivos js seran leidos por el babel-loader
        exclude: /node_modules/, //exepto estas carpetas
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['babel-plugin-styled-components', '@babel/plugin-syntax-dynamic-import']
          }
        }
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
  ],
}