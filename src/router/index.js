import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/home.vue';
import Form from '@/pages/form/form.vue';
import NauticBase from '@/pages/nauticBase/nauticBase.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/form',
      name: 'Create',
      component: Form,
    },
    {
      path: '/form/:id',
      name: 'Edit',
      component: Form,
    },
    {
      path: '/nauticBase/:id',
      name: 'NauticBase',
      component: NauticBase,
    },
  ],
});
