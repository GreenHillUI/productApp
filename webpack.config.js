const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, "/client/src/index.jsx"), //where all the transipling will being (ie. index must have all other parts imported into ti to successfully compile)
  output: {
    path: path.resolve(__dirname, 'client/dist'), //where the compiled files will go (and then ran via dist/index.html)
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'], //extensions do not need to be included while being
    fallback: { os: false }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //check any files with these endings to transpile
        exclude: /(bower_components)/, //excludes these files from transpiler to imporve runtime
        use: {
          loader: 'babel-loader', //use updated version of babel loader
          options: {
            presets: [
              "@babel/preset-env",
              [
                "@babel/preset-react",
                {
                  runtime: "automatic"
                }
              ]
            ]
            // plugins: ['@babel/plugin-transform-runtime'] //rather than injecting helper functions for babel into each file, provides reference (reducing duplication)
          }
        }
      }
    ],
  //   devServer: {    ** combine with script::   "dev": "webpack-dev-server --hot --inline"
  //     contentBase: './src',      **and install::   npm --dev webpack-dev-server
  //     publicPath: '/output'
  //  }
  }
};