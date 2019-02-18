<template>
  <v-flex xs12 sm4>
    <v-card :hover="true" height="100%" align-items-space-between>
      <section>
        <v-img :src="project.thumbnail" aspect-ratio="2.75" max-height="150px"/>

        <v-card-title primary-title>
          <h3 class="headline mb-0">{{ project.title }}</h3>
        </v-card-title>

        <v-card-text>
          <p>{{ project.description }}</p>
          <ul>
            <li v-for="(keyword, k) in project.keywords" :key="k">
              <v-chip color="primary">{{ keyword }}</v-chip>
            </li>
          </ul>
        </v-card-text>
      </section>

      <v-card-actions fill-height="true">
        <v-btn
          v-if="project.link"
          :href="project.link"
          flat
          outline
          color="success"
          target="_blank"
        >Visit Website &nbsp;
          <v-icon>open_in_new</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
.flex {
  padding: 4px;
}
.v-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.v-card__actions {
  justify-content: center;
  padding-bottom: 24px;
}
ul {
  list-style: none;
  padding-left: 0;
}
li {
  display: inline-block;
  padding: 0 8px;
}
</style>
