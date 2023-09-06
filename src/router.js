import { createRouter, createWebHistory } from 'vue-router';
import Products from './vue/components/Products/Products.vue';

const routes = [
    {
        path: '/',
        name: 'Products',
        component: Products,
    },
    // Добавьте другие маршруты здесь
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;