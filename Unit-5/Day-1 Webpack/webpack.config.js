const path = require("path")
module.exports={
entry: "./src/index.js",
output:{
    path:path.resolve(".","build"),
    filename:"build.js",
},
mode:"development",
module: {
    rules: [
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
}