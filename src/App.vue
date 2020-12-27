<template>
  <div id="app" class="lg:m-0 lg:pl-324px ">
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>

    <Nav />
    <MainPage />
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import MainPage from './components/MainPage.vue'


export default {
  name: 'App',
  components: {
    Nav,
    MainPage
  }
  
}
</script>
