<template>
  <h2>{{ t("about.title") }}</h2>
  <p>{{ t("about.description") }}</p>
</template>
<script setup lang="ts">
const { t } = useI18n()
definePageMeta
  ({
    layout
      : 'blog'
  })
</script>
