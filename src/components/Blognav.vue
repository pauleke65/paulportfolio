<template>
    <header class=" sticky h-14 ">
        <div class="flex flex-row w-screen justify-between items-center">
            <router-link to="/blog" class="mt-2 ml-6 text-base font-bold">Blog Home</router-link>
            <input class="rounded-full h-10 w-52 py-3 px-6 border-black border focus:outline-none mt-2" type="search" name="Search" placeholder="Search here" id="">
            <router-link to="/" class="mt-2 mr-6 text-base font-bold">Portfolio</router-link>
        </div>
    </header>
</template>
<script>
export default {
    name: "Blognav",
    
}
</script>