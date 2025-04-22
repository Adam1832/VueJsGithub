import { createRouter, createWebHistory } from 'vue-router';
import SignUp from './views/SignUp.vue';
import Detail from './views/Detail.vue';
import Cart from './views/Cart.vue';
import Login from './views/Login.vue';
import Products from './views/Products.vue'; 

const routes = [
    { path: '/', component: SignUp },
    { path: '/signup', component: SignUp },
    { path: '/chef/:id', component: Detail },
    { path: '/cart', component: Cart },
    { path: '/login', component: Login },
    { path: '/products', component: Products },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;