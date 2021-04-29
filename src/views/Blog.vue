<template>
  <div class="flex flex-col h-screen">
    <Blognav />
    <main class="flex-1 overflow-y-auto">
    <Blogmain />
    <Blogs :posts="posts" />
    </main>
  </div>
</template>
<script>
import Blognav from '@/components/Blognav.vue'
import Blogmain from '@/components/Blogmain.vue'
import Blogs from '@/components/Blogs.vue'
import axios from 'axios';
export default {
  components: {
    Blognav,
    Blogmain,
    Blogs
  },
  data(){
    return {
      posts: []
    }
  },

  mounted: function(){

       axios
  // HTTP request
  .post('http://localhost:1337/graphql', {
    headers: {
      'Content-Type': 'application/json'
    },
    // GraphQL query
    query: `
      query Articles {
        articles {
          id
          title         
          description
          pagename
          published_at
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
  .then(({ data }) => this.posts = data.data.articles)
  .catch((e) => alert(error))

  },


  
  
}
</script>