import { createApp } from 'vue'
import './assets/scss/app.scss'
/* fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBox } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
/* fontsource */
import '@fontsource/work-sans/400.css'
import '@fontsource/work-sans/500.css'
import App from './App.vue'

library.add(faMagnifyingGlass, faUser, faBox, faChevronDown, faFacebookF, faTwitter, faInstagram, faYoutube)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
