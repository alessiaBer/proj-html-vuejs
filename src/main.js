import { createApp } from 'vue'
import './assets/scss/app.scss'
/* fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faMap } from '@fortawesome/free-regular-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTruckMoving } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-regular-svg-icons'
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons'
/* fontsource */
import '@fontsource/work-sans/300.css'
import '@fontsource/work-sans/400.css'
import '@fontsource/work-sans/500.css'
import '@fontsource/trocchi/400.css'
import App from './App.vue'

library.add(faMagnifyingGlass, faBagShopping, faUser, faChevronDown, faFacebookF, faTwitter, faInstagram, faYoutube, faMap, faClock, faCheck, faTruckMoving, faDollarSign, faCreditCard, faSquareCheck)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
