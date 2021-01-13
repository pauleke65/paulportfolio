<template>
  <div class="blog">
    <Blognav />
    <Blogmain />
    <Blogs />
  </div>
</template>
<script>
import Blognav from '@/components/Blognav.vue'
import Blogmain from '@/components/Blogmain.vue'
import Blogs from '@/components/Blogs.vue'
export default {
  components: {
    Blognav,
    Blogmain,
    Blogs
  }
  
}
</script>