import { createRouter, createWebHistory } from 'vue-router';
import ProductsList from './vue/components/ProductsFolder/ProductsList.vue';
import ProductCreate from './vue/components/ProductsFolder/ProductCreate.vue';
import UserLogin from './vue/components/UserFolder/UserLogin.vue';
import UserSignup from './vue/components/UserFolder/UserSignup.vue';

const routes = [
    {
        path: '/',
        name: 'ProductsList',
        component: ProductsList,
    },
    {
        path: '/product/create',
        name: 'ProductCreate',
        component: ProductCreate,
    },
    {
        path: '/user/login',
        name: 'UserLogin',
        component: UserLogin,
    },
    {
        path: '/user/signup',
        name: 'UserSignup',
        component: UserSignup,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;