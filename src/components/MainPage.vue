<template>

<main class="bg-black">
    <Home />
    <About />
    <Services />
</main>



</template>

<script>
import Home from './Home.vue'
import About from  './About.vue'
import Services from './Services'

export default {
  name: 'MainPage',
  components: {
    Home,
    About,
    Services
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
