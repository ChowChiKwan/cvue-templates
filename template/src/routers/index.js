/**
 * Created by niefz on 2018/9/18.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: r => require.ensure([], (require) => {
        r(require('@/template/hello'));
      }, 'hello'),
    },
    {
      path: '*',
      name: 'error',
      component: r => require.ensure([], (require) => {
        r(require('@/components/exception'));
      }, 'error'),
    },
  ],
});
