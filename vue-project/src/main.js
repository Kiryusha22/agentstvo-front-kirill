import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/swiper-bundle.css';

const app = createApp(App);

app.component('Swiper', Swiper);
app.component('SwiperSlide', SwiperSlide);

app.use(router).mount('#app');
