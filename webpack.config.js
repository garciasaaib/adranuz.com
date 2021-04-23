const HtmlWebpackPlugin = require("html-webpack-plugin");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const path = require('path')
const webpack = require('webpack')


module.exports = {
  devServer: {
    port: 3000,
    hot: true,
  },
  entry: './src/index.js',
  output: {
    filename: 'app.bundle.js'
  },
  resolve: {
    alias: {
      '@templates': path.resolve(__dirname, 'src/templates/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@routes': path.resolve(__dirname, 'src/routes/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@components': path.resolve(__dirname, 'src/components/'),
    }
  },
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
        test: /\.(png|jp(e*)g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        options: {
            extract: true,
            spriteFilename: './svgSprite/icons.svg'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "./src/assets/icons/main.svg"
    }),
    new webpack.HotModuleReplacementPlugin({}),
    new SpriteLoaderPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
  },
}