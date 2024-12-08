<script setup lang="ts">
const { t, locale, locales, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>

<template>
  <NuxtLayout>
    <!-- <v-app> -->
    <NuxtPage />
    <!-- </v-app> -->
  </NuxtLayout>
  <!-- <a href="#" v-for="locale in availableLocales" :key="locale.code" @click.prevent.stop="setLocale(locale.code)"> -->
  <!--   {{ locale.name }} -->
  <!-- </a> -->
  <!-- <h1>{{ t('title') }}</h1> -->
</template>
