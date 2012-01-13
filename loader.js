var start;

start = function() {
  var script, scripts, _i, _len;
  scripts = [
	'libs.js',
	'calculation.js'
  ];
  for (_i = 0, _len = scripts.length; _i < _len; _i++) {
    script = scripts[_i];
    importScripts('scripts/' + script);
  }
};

this.onmessage = function(e) {
  switch (e.data) {
    case "start":
	  start();
	break;
    case "stop":
	  self.close();
	break;
    default:
      postMessage("error");
	break;
  }
};