<template>
  <v-list>
    <template v-for="(section, index) in projectSections">
      <v-subheader :key="index">
        <h2>{{ section.title }}</h2>
      </v-subheader>
      <v-layout :key="index" justify-space-between wrap>
        <ProjectItem v-for="(project, i) in section.value" :project="project" :key="i"/>
      </v-layout>
      <v-divider :key="index"/>
    </template>
  </v-list>
</template>

<script>
import projectSections from "@/assets/js/projects.js";
import ProjectItem from "@/components/projects/ProjectItem";
export default {
  components: { ProjectItem },
  data() {
    return {
      projectSections
    };
  },
  mounted() {
    console.log(projectSections);
  }
};
</script>

<style>
.v-subheader {
  margin-top: 16px;
}
.v-divider {
  margin-top: 32px;
}
</style>
