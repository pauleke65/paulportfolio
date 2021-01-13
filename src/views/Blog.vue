<template>
  <div class="flex flex-col h-screen">
    <Blognav />
    <main class="flex-1 overflow-y-auto">
    <Blogmain />
    <Blogs />
    </main>
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