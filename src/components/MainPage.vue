<template>

<main class="bg-black w-full">
    <Home />
    <About />
    <Services />
    <Works />
</main>



</template>

<script>
import Home from './Home.vue'
import About from  './About.vue'
import Services from './Services'
import Works from './Works'

export default {
  name: 'MainPage',
  components: {
    Home,
    About,
    Services,
    Works
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
