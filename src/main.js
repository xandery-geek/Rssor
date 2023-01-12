import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"
import Antd from 'ant-design-vue';

import App from './App.vue'
import routes from './render/routes.js';
import store from './store/index';
import i18n from './locale/index'

/* import iconfont */
import { createFromIconfontCN } from '@ant-design/icons-vue';

const iconfont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/c/font_3845867_ke5aixpoj78.js"
})

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faUser, faStar, faEye, faNewspaper } from '@fortawesome/free-regular-svg-icons'
import { faRss, faGear, faAngleUp, faAngleDown, faSliders, faPlus, faFolderOpen, 
    faArrowRotateRight, faMagnifyingGlass, faEllipsis } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'ant-design-vue/dist/antd.css';

/* add icons to the library */
library.add(faUser, faStar, faEye, faNewspaper)
library.add(faRss, faGear, faAngleUp, faAngleDown, faSliders, faPlus, faFolderOpen, 
    faArrowRotateRight, faMagnifyingGlass, faEllipsis)


// create Router
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

// create App
const app = createApp(App)

// add components
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('icon-font', iconfont)

// use 
app.use(i18n)
app.use(router)
app.use(store)
app.use(Antd)
app.mount('#app')
