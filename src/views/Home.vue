<template>
<html>
    <div id="appmain" class="lg:m-0 lg:pl-324px ">
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>

    <Nav />
    <MainPage />
  </div>
</html>
</template>

<script>
// @ is an alias to /src
import MainPage from '@/components/MainPage.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'Home',
  components: {
    MainPage,
    Nav
  }
}
</script>

<style>

html{
  scroll-behavior: smooth;
}

</style>