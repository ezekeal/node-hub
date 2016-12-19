const path = require('path')
const merge = require('webpack-merge')

const common = {
  output: {
    path: path.join(__dirname, 'build')
  },
  node: {
    __dirname: false,
    __filename: false
  },
  resolve: {
		extensions: ['', '.js', '.jsx']
	},
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader'
        ]
      }
    ]
  }
}

const main = {
  entry: './src/main.js',
  target: 'electron-main',
  output: {
    filename: 'main.js'
  }
}

const renderer = {
  entry: './src/renderer.js',
  target: 'electron-renderer',
  output: {
    filename: 'renderer.js'
  }
}

module.exports = [
  merge(common, main),
  merge(common, renderer)
]
