# incremental-dom-react-helper

Helper to make Google's [incremental-dom](https://github.com/google/incremental-dom) library work with React's compile target today.

Example: http://jsbin.com/yoturaneca/edit?js,output

```js
let dom = (
  <div className="foo">
    <h1>Hello World</h1>
  </div>
);

IncrementalDOM.patch(document.body, dom);
```

Or rather:

```js
var dom = (
  React.createElement('div', { className: 'foo'},
    React.createElement('h1', null, 'Hello World')
  )
);

IncrementalDOM.patch(document.body, dom);
```
