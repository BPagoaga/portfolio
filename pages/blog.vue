<template>
  Blog
  // @TODO display a list of excerpts from blog posts

  <NuxtLink to="/articles/ergokbd">go to article kbd</NuxtLink>
</template>
<script setup lang="ts">
const { data, status, error, refresh, clear } = await useFetch('/api/articles')
console.log(data.value)
definePageMeta
  ({
    layout
      : 'blog-article'
  })
</script>
