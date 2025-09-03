<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt';
import { useHead } from '#app'

useHead({
  title: 'AMPPCroatia',
  link: [
    { rel: 'icon', type: 'image/png', href: '' }
  ]
})
</script>

<template>
  <Analytics />
  <div>
    <NuxtPage/>
  </div>
</template>

