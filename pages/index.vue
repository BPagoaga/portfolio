<template>
  <div class="container">
    <div v-for="post in posts" class="row post mb-5 justify-content-center">
        <div class="col-sm-10">
          <h6 class="created-at" v-html="post.created_at"></h6>
          <h5><router-link class="display-4 post-title" :to="{ name: 'slug', params: { slug: post.slug }}">{{post.title}}</router-link></h5>
        </div>
</div>
  </div>
</template>

<script>
export default {
  layout: 'index',
      head () {
      return {
        title: 'First Last',
        meta: [
          { hid: 'home', name: 'meta name', content: 'meta content seo goodness' }
        ]
      }
    },
    fetch ({store}) {
      store.dispatch('getPosts')
    },
    computed: {
      posts () {
        return this.$store.state.posts
      }
    }
}
</script>

<style>
.links {
  padding-top: 15px;
}

.network {
  font-weight: 400;
  font-size: 1rem;
}

.network .circle {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background: green;
  padding: 0.1rem 0.5rem;
  border-radius: 1rem;
}

.network.offline .circle {
  background: red;
}
</style>