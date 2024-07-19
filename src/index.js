import { createApp } from 'vue';
import i18n from './i18n/index';
import routes from './router/index';
import './index.scss';
import App from './App.vue';
const app = createApp(App);
app.use(i18n);
app.use(routes);
app.mount('#app');