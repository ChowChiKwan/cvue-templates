/**
 * Created by ChowChiKwan on 2019/08/26.
 */
const bs = require('browser-sync').create();

bs.init({
  ui: {
    port: 3000
  },
  files: [
    'src/**'
  ],
  proxy: {
    target: 'http://localhost:12586',
  }
});
