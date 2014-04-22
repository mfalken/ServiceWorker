function withIframe(url, f) {
  var frame = document.createElement('iframe');
  frame.src = url;
  frame.onload = function() {
      f(frame);
  };
  document.body.appendChild(frame);
}
