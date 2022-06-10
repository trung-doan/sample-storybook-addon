const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/\bcore-js\b/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      ie: 11
                    },
                    useBuiltIns: "entry",
                    corejs: 3
                  }
                ]
              ]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js"]
  },
};
