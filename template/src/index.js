/**
 * Created by ChowChiKwan on 2019/08/26.
 */
import '@babel/polyfill';

import Vue from 'vue';

{{#router}}
import router from './routers';
{{/router}}
{{#vuex}}
import store from './stores';
{{/vuex}}
{{#i18n}}
import { i18n, loadLanguageAsync } from './i18n';
{{/i18n}}
import './sass/reset.scss';
import './sass/common.scss';
import './sass/element.scss';

import App from './index.vue';

{{#i18n}}
const lang = 'zh';
loadLanguageAsync(lang);

{{/i18n}}
const app = new Vue({
  el: '.wrapper',
  {{#router}}
  router,
  {{/router}}
  {{#vuex}}
  store,
  {{/vuex}}
  {{#i18n}}
  i18n,
  {{/i18n}}
  render: h => h(App),
});

export default { app };