// iterateOverKeys function iterates over key-value pair for the provided styles,
// it then calls the callback function for each key-value pair
function iterateOverStyles(styles, callback) {
  var keys = Object.keys(styles);

  var i, key;
  for (i = 0; i < keys.length; i++) {
    key = keys[i];
    callback(key, styles[key]);
  }
}

ctx.prototype.__applyStyleState = function (styleState) {
  iterateOverStyles(styleState, (key, value) => {
    this[key] = value;
  });
};

ctx.prototype.__getDefaultStyles = function () {
  iterateOverStyles(STYLES, (key, value) => {
    this[key] = value.canvas;
  });
};

ctx.prototype.__getStyleState = function () {
  var styleState = {};

  iterateOverStyles(STYLES, (key, _) => {
    styleState[key] = this[key];
  });

  return styleState;
};
