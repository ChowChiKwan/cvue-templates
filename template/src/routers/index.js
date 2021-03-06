/**
 * Created by chowchikwan on 2018/9/18.
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
      name: 'HelloWorld',
      component: r => require.ensure([], (require) => {
        r(require('@/components/hello-world'));
      }, 'hello-world'),
    },
  ],
});
