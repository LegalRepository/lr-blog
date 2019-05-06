const minify = require('@node-minify/core');
const cleanCSS = require('@node-minify/clean-css');

minify({
  compressor: cleanCSS,
  input: 'css/style.css',
  output: 'public/css/style.min.css',
  callback: function(err, min) {}
});

minify({
  compressor: cleanCSS,
  input: 'css/style.css',
  output: 'css/style.min.css',
  callback: function(err, min) {}
});
