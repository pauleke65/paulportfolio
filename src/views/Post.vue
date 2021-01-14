<template>
  <div class="flex flex-col h-screen">
   <Blognav />
    <main class="flex-1 overflow-y-auto">
      <h1>{{ post.title }}</h1>
    </main>
  </div>
</template>
<script>
import Blognav from '@/components/Blognav.vue'
import axios from 'axios'
export default {
  components: {
    Blognav
  },
  data(){
    return{
     post: Object
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
          query Articles($id: ID = ${this.$route.params.id}) {
          article(id: $id) {
            id
            title
            content
            image {
              url
            }
            published_at
          }
        }
    `
  })
  .then(({ data }) => this.post = data.data.article)
  .catch((e) => alert(error))
      
   

  },
  
}
</script>