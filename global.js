var cbt = require('cbt_tunnels');
module.exports = {
  beforeEach: function (done) {
    console.log('Starting up tunnel');
    cbt.start({
      username: '<fill email here>',
      authkey: '<fill key here>'
    }, function (err, data) {
      if (err) {
        done(err);
      } else {
        done(data);
      }
    });
  },
  afterEach: function (done) {
    console.log('Closing Down Tunnel');
    cbt.stop();
    done();
  }
}