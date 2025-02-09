import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'layout',
    component: () => import('pages/Dashboard/DashboardLayout.vue'),
    children: [{ path: '/', name: 'home', component: () => import('pages/Dashboard/DashboardPage.vue') }],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
