Package.describe({
  summary: 'Give your pages some headroom.',
  version: '0.0.1',
  name: 'waitingkuo:headroomjs',
  git: 'https://github.com/waitingkuo/meteor-headroomjs'

});

Package.onUse(function (api) {

  api.versionsFrom('METEOR@1.1.0.2');
  api.use('jquery');
  api.addFiles(['headroom.js/dist/headroom.js', 'headroom.js/dist/jQuery.headroom.js'], 'client');

});
