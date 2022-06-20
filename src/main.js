import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"

import App from './App.vue'
import routes from './render/routes.js';


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faUser, faStar, faEye, faNewspaper } from '@fortawesome/free-regular-svg-icons'
import { faRss, faGear, faAngleUp, faAngleDown, faSliders, faPlus, faFolderOpen, 
    faArrowRotateRight, faMagnifyingGlass, faEllipsis } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

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

// use 
app.use(router)
app.mount('#app')
