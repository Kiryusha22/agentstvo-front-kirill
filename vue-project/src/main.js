import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Путь к вашему файлу с маршрутами
import store from './stores'; // Путь к вашему файлу с хранилищем

createApp(App).use(router).use(store).mount('#app');
