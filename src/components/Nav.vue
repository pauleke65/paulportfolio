<template>

<header class="w-full fixed inset-y-0 z-100 ">

    <nav class="h-12 flex justify-between top-0">
        <div class="bg-black text-white ml-2 mt-2 text-4xl">
            <i @click="toggleNav" class="bx bx-menu"></i>
        </div>

        <div :class="['nav_menu','left_t' , {'show': toggled}]">
            <div class="absolute top-4 right-4 object-right-top text-4xl text-black">
                <i @click="toggleNav" class='bx bx-x'></i>
            </div>

    <div class="flex flex-col items-center justify-center">
        <div>
        <ul class="">
            <li class="text-3xl text-black mt-16 mb-8 active"><a href="#home" class="">Home</a></li>
            <li class="text-3xl text-black mb-8"><a href="#about" class="">About</a></li>
            <li class="text-3xl text-black mb-8"><a href="#services" class="">Services</a></li>
            <li class="text-3xl text-black mb-8"><a href="#works" class="">Works</a></li>
            <li class="text-3xl text-black mb-8"><a href="#interests" class="">Interests</a></li>
            <li class="text-3xl text-black mb-8"><a href="#contact" class="">Contact</a></li>
        </ul>
        </div>

        <div class="flex mt-16 justify-center">
                <div class="mx-2">
                    <img src="../assets/images/Facebook.svg" alt="">
                </div>
                <div class="mx-2">
                    <img src="../assets/images/Instagram.svg" alt="">
                </div>
                <div class="mx-2">
                    <img src="../assets/images/Twitter.svg" alt="">
                </div>
                <div class="mx-2">
                    <img src="../assets/images/BitBucket.svg" alt="">
                </div>
                <div class="mx-2">
                    <img src="../assets/images/GitHub.svg" alt="">
                </div>
                <div class="mx-2">
                    <img src="../assets/images/At Symbol.svg" alt="">
                </div>
        </div>
        </div>
        </div> 

    </nav>    

</header>

<!-- <nav class="sticky top-0">
 <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
    <div class="" id="nav-toggle">
        <i class='bx bx-menu'></i>
    </div>

    <div class="container left-0 bg-white h-full w-1/4">
    <div class="flex justify-center mt-24">
        <ul class="">
            <li class="text-4xl my-5 active"><a href="#home" class="">Home</a></li>
            <li class="text-4xl my-5"><a href="#about" class="">About</a></li>
            <li class="text-4xl my-5"><a href="#services" class="">Services</a></li>
            <li class="text-4xl my-5"><a href="#works" class="">Works</a></li>
            <li class="text-4xl my-5"><a href="#interests" class="">Interests</a></li>
            <li class="text-4xl my-5"><a href="#contact" class="">Contact</a></li>
        </ul>
    </div>

     <div class="flex mt-32 justify-center">
                <div class="mx-2">
                    <img src="../assets/images/Facebook.svg" alt="">
                </div>
                <div class="mx-2">
                    <img src="../assets/images/Instagram.svg" alt="">
                </div>
                <div class="mx-2">
                    <img src="../assets/images/Twitter.svg" alt="">
                </div>
                <div class="mx-2">
                    <img src="../assets/images/BitBucket.svg" alt="">
                </div>
                <div class="mx-2">
                    <img src="../assets/images/GitHub.svg" alt="">
                </div>
                <div class="mx-2">
                    <img src="../assets/images/At Symbol.svg" alt="">
                </div>
            </div>
    </div>


</nav> -->

</template>

<script>
export default {
  name: 'Nav',
  data() {
      return{
      toggled: false
      }
    },

  methods: {
      toggleNav(){
          this.toggled = !this.toggled
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');
a {
    font-family: 'Playball', cursive;    
}

.active {
    text-decoration: underline;
}

.left_t {
    left: -100%
}

.show{
    left:0;
}
</style>