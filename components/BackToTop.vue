<template>
    <NuxtLink @click="toTop" no-prefetch>
    <img src="https://a.storyblok.com/f/286878845005802/512x512/e1097893d8/backtotop.png" class="backToTop"/>
    </NuxtLink>
</template>

<script setup>
function toTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

</script>