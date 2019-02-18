<template>
  <v-layout column justify-center align-center>
    <v-card color="#fb8c00" width="400px">
      <v-card-title class="headline">Building website</v-card-title>
      <v-card-text>
        <p>Sorry for the inconvenience.</p>
        <p>Work In Progress</p>
      </v-card-text>
    </v-card>
    <ProjectsList/>
  </v-layout>
</template>

<script>
import ProjectsList from "@/components/projects/ProjectsList";
export default {
  layout: "index",
  components: { ProjectsList }
};
</script>
