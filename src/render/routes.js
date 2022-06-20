import DashBoard from '../components/Dashboard.vue'
import ArticlePage from '../components/Article.vue'


export default [
    {
        path: '/',
        name: 'dashboard',
        component: DashBoard
    },
    {
        path: '/cagtegory',
        name: 'category',
        component: DashBoard
    },
    {
        path: '/article',
        name: 'article',
        component: ArticlePage
    }
];
