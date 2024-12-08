<template>
  <v-list>
    <template v-for="(section, index) in projectSections" :key="index">
      <v-subheader>
        <h2>{{ section.title }}</h2>
      </v-subheader>
      <v-layout justify-space-between wrap>
        <ProjectItem v-for="(project, i) in section.value" :project="project" :key="i" />
      </v-layout>
      <v-divider />
    </template>
  </v-list>
</template>

<script setup lang="ts">
import projectSections from "@/assets/js/projects.json";
</script>
