const path = require("path")

module.exports = {
  entry: "./wordtrainer/Main.js",
  output: {
    publicPath: "",
    path: path.resolve(__dirname, "wordtrainer"),
    filename: "bundled.js"
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 5080,
    contentBase: path.join(__dirname, "wordtrainer"),
    hot: true,
    historyApiFallback: { index: "index.html" }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", {'plugins': ['@babel/plugin-proposal-class-properties']}, ["@babel/preset-env",  { targets: { node: "12" } }]]
              
              
            
          }
        }
      }
    ]
  }
}
