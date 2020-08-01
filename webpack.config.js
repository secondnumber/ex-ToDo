const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = {}) => {
  const { mode = 'development' } = env;
  const isProd = mode === 'production';
  const isDev = mode === 'development';

  const getStyleLoaders = () => [
    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
    'css-loader',
  ];

  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        title: 'ToDo app',
        buildTime: new Date().toISOString(),
        template: 'public/index.html',
      }),
    ];
    if (isProd) {
      plugins.push(
        new MiniCssExtractPlugin({
          filename: 'main-[hash:8].css'
        })
      );
    }
    return plugins;
  };

  return {
    mode: isProd ? 'production' : isDev && 'development',
    output: {
      filename: isProd ? 'main-[hash:8].js' : undefined,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options: { presets: ['@babel/env'] },
        },
        {
          test: /\.css$/i,
          use: getStyleLoaders(),
        },
        {
          test: /\.s[ac]ss$/i,
          use: [...getStyleLoaders(), 'sass-loader'],
        },
        {
          test: /\.(jpg|jpeg|png|gif|ico)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images',
                name: '[name]-[sha1:hash:8].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(ttf|otf|eot|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'fonts',
                name: '[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(avi|wav)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'sounds',
                name: '[name]-[sha1:hash:8].[ext]',
              },
            },
          ],
        },
      ],
    },

    plugins: getPlugins(),
  };
};
