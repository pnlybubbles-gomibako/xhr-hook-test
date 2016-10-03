const xhrMock = require('xhr-mock');

xhrMock.setup();

xhrMock.mock(function(req, res) {
  if (req.url().match(/example2\.txt$/)) {
    return res
      .status(200)
      .header('Content-Type', 'text/plain')
      .body('mocked string (example2.txt)');
  } else {
    return xhrMock.THROUGH_TO_REAL_XHR;
  }
});

//vanilla calls
var xhr1 = new XMLHttpRequest();
xhr1.open('GET', 'example1.txt');
xhr1.onreadystatechange = function() {
  document.getElementById('one').innerHTML = xhr1.responseText;
};
xhr1.send();

var xhr2 = new XMLHttpRequest();
xhr2.open('GET', 'example2.txt');
xhr2.onreadystatechange = function() {
  document.getElementById('two').innerHTML = xhr2.responseText;
};
xhr2.send();
