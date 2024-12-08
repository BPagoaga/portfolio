<template>
  Blog
  // @TODO display a list of excerpts from blog posts

  <NuxtLink to="/articles/ergokbd">go to article kbd</NuxtLink>
</template>
<script setup lang="ts">
definePageMeta
  ({
    layout
      : 'blog-article'
  })
</script>
