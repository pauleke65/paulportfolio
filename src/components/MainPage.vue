<template>

<main class="bg-black w-full">
    <Home />
    <About />
    <Services />
    <Works />
    <Contact />
</main>



</template>

<script>
import Home from './Home.vue'
import About from  './About'
import Services from './Services'
import Works from './Works'
import Contact from './Contact'

export default {
  name: 'MainPage',
  components: {
    Home,
    About,
    Services,
    Works,
    Contact
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
