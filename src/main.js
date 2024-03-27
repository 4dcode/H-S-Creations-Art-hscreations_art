import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import store from './store'
import VueScrollTo from 'vue-scrollto';
import Countdown from 'vue3-flip-countdown';

loadFonts()

const app = createApp(App)

// Add Vue directive
app.directive('scroll-to', VueScrollTo, {
  container: 'body',
  duration: 1000,
  easing: 'ease',
  offset: -160,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
})

app.use(store)
app.use(router)
app.use(vuetify)
app.use(Countdown)
app.mount('#app')
