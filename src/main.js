import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faChartSimple, faRss, faGear, faAngleUp, faAngleDown} from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faUser)
library.add(faChartSimple, faRss, faGear, faAngleUp, faAngleDown)


// create App
const app = createApp(App)

// use components
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
