

export default [
    {
        path: '/',
        name: 'dashboard',
        // redirect: { name: 'login' },
        component: () => import('@/components/Dashboard.vue'),
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/cagtegory',
        name: 'category',
        component: () => import('@/components/Article.vue'),
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/article',
        name: 'article',
        component: () => import('@/components/Article.vue'),
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/account/login',
        name: 'login',
        component: () => import('@/components/account/Login.vue'),
        meta: {
            keepAlive: false
        }
    },
    {
        path: '/account/signup',
        name: 'signup',
        component: () => import('@/components/account/Signup.vue'),
        meta: {
            keepAlive: false
        }
    },
    {
        path: '/account/reset',
        name: 'reset',
        component: () => import('@/components/account/Reset.vue'),
        meta: {
            keepAlive: false
        }
    }
];
