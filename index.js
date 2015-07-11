function parseAttrsObj(attrsObj) {
  var attrs = [];
  var keyAttr = null;

  var attrsObjKeys = Object.keys(attrsObj);

  for (var i = 0; i < attrsObjKeys.length; i++) {
    var key = attrsObjKeys[i];
    var val = attrsObj[key];

    if (key === 'key') {
      keyAttr = val;
      continue;
    }

    if (key === 'className') {
      key = 'class';
    }

    attrs.push(key, val);
  }

  return {
    attrs: attrs,
    key: keyAttr
  }
}

var React = {
  createElement(tagName, attrs) {
    var children = Array.prototype.slice.call(arguments, 2);
    var parsedAttrs = attrs ? parseAttrsObj(attrs) : {};

    return function() {
      IncrementalDOM.elementOpen.apply(null, [tagName, parsedAttrs.key, null].concat(parsedAttrs.attrs));

      for (var i = 0; i < children.length; i++) {
        var child = children[i];

        if (typeof child === 'string') {
          IncrementalDOM.text(child);
        } else {
          child();
        }
      }

      IncrementalDOM.elementClose(tagName);
    }
  }
};
