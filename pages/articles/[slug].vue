<template>
  <p>{{ route.params.slug }}</p>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'blog-article'
})
const route = useRoute()
const slug = route.params.slug
console.log(slug)
</script>
