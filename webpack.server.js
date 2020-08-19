const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );
const plugins = [
    new MiniCssExtractPlugin({
        filename: "styles.css",
    }),
];

module.exports = {
  entry: './server/index.js',

  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve('server-build'),
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                ],
            }
    ]
  },
  plugins

};
