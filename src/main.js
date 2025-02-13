import { createApp } from 'vue'
import './assets/styles.css'; // Import the global CSS file
import App from './App.vue'
import i18n from './i18n'; // Import the i18n instance
import router from './router'; // Import the router instance

const app = createApp(App)
  .use(i18n) // Tell Vue to use vue-i18n
  .use(router); // Tell Vue to use vue-router

app.mount('#app');
