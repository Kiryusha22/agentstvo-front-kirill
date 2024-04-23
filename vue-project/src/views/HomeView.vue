<template>
  <div>
    <Title />
    <About />
    <Slider />

  </div>
</template>

<script>
import Slider from '../components/Slider.vue';
import Title from "@/components/Title.vue";
import About from "@/components/About.vue";

export default {
  name: 'Home',
  components: {
    About,
    Title,
    Slider
  }
};
</script>

<style>
h1 {
  color: #333;
}

p {
  color: #666;
}


</style>
