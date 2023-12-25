import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import App from './App.vue';

import ConnectedApps from './components/ConnectedApps.vue';
import Settings from './components/Setting.vue';
import Reviews from './components/Reviews.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: 'Main', path: '/', component: ConnectedApps },
    { name: 'Settings', path: '/settings', component: Settings },
    { name: 'Reviews', path: '/reviews', component: Reviews },
  ],
});

createApp(App).use(router).mount('#app');
