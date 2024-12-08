<script setup lang="ts">
const { t, locale, locales, setLocale } = useI18n()
useHead({
  htmlAttrs: {
    lang: locale,
  },
})
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})

const ariaLabelLinkedin = computed(() => t("site.navigation.socials.linkedin"))
const ariaLabelGithub = computed(() => t("site.navigation.socials.github"))
</script>

<template>
  <header>
    <h1>{{ t("site.title") }}
      <br>Bernard Pagoaga
    </h1>
    <a href="#" v-for="locale in availableLocales" :key="locale.code" @click.prevent.stop="setLocale(locale.code)">
      {{ locale.name }}
    </a>

    <br>
    <nav class="social-media">
      <ul>
        <li>
          <NuxtLink to="/">{{ t("site.navigation.home") }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">{{ t("site.navigation.about") }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog">{{ t("site.navigation.blog") }}</NuxtLink>
        </li>
      </ul>
      <ul class="list-inline">
        <li>
          <a :aria-label="ariaLabelLinkedin" :title="ariaLabelLinkedin"
            href="https://fr.linkedin.com/in/bernard-pagoaga-a7307470" target="_blank">
            <v-icon icon="mdi-linkedin" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a :aria-label="ariaLabelGithub" :title="ariaLabelGithub" href="https://github.com/BPagoaga" target="_blank">
            <v-icon icon="mdi-github" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
