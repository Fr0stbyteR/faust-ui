const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** @type {import('webpack').Configuration} */
const config = {
  entry: './src/index.ts',
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'FaustUI',
    libraryTarget: 'umd',
    chunkFilename: 'js/[chunkhash].js'
  },
  module: {
    rules: [{
        test: /\.(ts|js)x?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: [ 
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/',
              publicPath: 'assets/'
            }
          }
        ]
      }
    ]
  },
  plugins: []
};
/** @type {import('webpack').Configuration} */
const esmConfig = {
  ...config,
  output: {
    path: path.resolve(__dirname, 'dist', 'esm'),
    libraryTarget: 'module'
  },
  experiments: { outputModule: true },
  module: {
    rules: [{
        test: /\.(ts|js)x?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: [ 
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/',
              publicPath: 'assets/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css'
    }),
  ]
};
module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
    config.output.filename = 'faust-ui.js';
    esmConfig.devtool = 'source-map';
    esmConfig.output.filename = 'faust-ui.js';
  }
  if (argv.mode === 'production') {
    config.devtool = 'source-map';
    config.output.filename = 'faust-ui.min.js';
    esmConfig.devtool = 'source-map';
    esmConfig.output.filename = 'faust-ui.min.js';
  }
  return [config, esmConfig];
};