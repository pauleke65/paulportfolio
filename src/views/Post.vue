<template>
  <div class="flex flex-col h-screen">
   <Blognav />
    <main class="flex-1 overflow-y-auto p-5">
      <div>
        <img :src="'http://192.168.43.103:1337' + post.image.url" alt="" class=" h-60 w-full" style="object-fit: cover">
      <h1 class="text-center text-3xl font-extrabold mt-4">{{ post.title }}</h1>
      <p class="text-center mt-2 font-bold">{{ formatPostLine(post.author.name, post.published_at, post.category.name) }}</p>

      <div>
      <vue-markdown-it class="mt-10" :source="post.content" />
      </div>
      </div>
    </main>
  </div>
</template>
<script>
import VueMarkdownIt from "vue-markdown-it";
var moment = require('moment')
import Blognav from '@/components/Blognav.vue'
import axios from 'axios'
export default {
  components: {
    Blognav,
    VueMarkdownIt
  },
  data(){
    return{
     post: Object
    }
  },

  methods: {

    formatPostLine(author, date, category){
       return `${author} | ${moment(date).format("ll")} | ${category}`
    }

  },


  mounted: function(){

       axios.post('http://192.168.43.103:1337/graphql', {
    headers: {
      'Content-Type': 'application/json'
    },
    // GraphQL query
    query: `
          query Articles($id: ID = ${this.$route.params.id}) {
          article(id: $id) {
            id
            title      
            published_at
            content
            image {
              url
            }
            category {
              name
            }
            author {
              name
            }
          }
        }
    `
  })
  .then(({ data }) => this.post = data.data.article)
  .catch((e) => alert(error))

  },
  
}
</script>