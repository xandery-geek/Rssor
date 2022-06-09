import DashBoard from '../components/Dashboard.vue'
import CategoryBoard from '../components/Categories.vue'


export default [
    {
        path: '/',
        name: 'dashboard',
        component: DashBoard
    },
    {
        path: '/cagtegory',
        name: 'category',
        component: CategoryBoard
    }
];
