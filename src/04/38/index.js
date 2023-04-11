function a() {
  console.log('[a:this]:', this); // window
}
a();

var b = function () {
  console.log('[b:this]:', this); // window
};
b();

var c = {
  name: 'The c object',
  log: function (title = '[c:log:this]:') {
    console.log(title, this); // c object

    if (title === '[c:log:this]:') {
      var self = this;
      var _log = function () {
        console.log('[c:log:_log:this]:', this); // window
        console.log('[c:log:_log:self]:', self); // c object
      };
      _log();
    }
  },
};
c.log();

var d = c.log.bind(this);
d('[d:this]:'); // window

c.log.apply(this, ['[e:this]:']); // window
c.log.call(this, '[f:this]:'); // window
