module.exports = {
  mode: "development",
  output: {
    filename: `js/[name].js`,
    chunkFilename: `js/[id]-chunk.js`,
    path: __dirname + '/dist',
  },
  target: "node",
};
