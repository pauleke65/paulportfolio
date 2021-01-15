<template>
  <div class="grid grid-cols-1 md:grid-cols-2 w-screen bg-white p-2">



        <router-link
            v-for="post in posts" :key="post.id" 
            :to="{ path: '/post/' + post.pagename + '/' + post.id}"
            class="uk-link-reset"
           
          >
       <div class="flex flex-col m-2 p-2 h-max">
          <div>
                  <img  class="h-32  md:h-44 mt-2 w-full" style="object-fit: cover" :src="'http://192.168.43.103:1337' + post.image.url" alt="">
          </div>

          <div class="flex flex-col">
              <h2 class="text-2xl font-extrabold">{{ post.title }}</h2>
              <p class="text-gray-500">{{ post.description }}</p>
              <p class="text-sm text-gray-500 mt-2">{{ formatLine(post.category.name, post.published_at, post.author.name) }}</p>
          </div>
         
      </div>
        </router-link>

   
  </div>
</template>
<script>
var moment = require('moment');
export default {
  name: "Blogs",
    data() {
    return {
  
    };
  },
  props: {
      posts: Array
  },

  methods: {
      formatLine(category, date, author){
          return `${category} | On ${moment(date).format("ll")} by ${author}`
      }
  }
};
</script>