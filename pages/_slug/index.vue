<template>
    <article v-html="postContent"></article>
</template>

<script>
export default {
    layout: 'blog',
    head () {
      let post = this.post
      return {
        title: 'Andre Liem',
        meta: [
          {
            hid: post.meta.id,
            name: post.meta.name,
            content: post.meta.content
          }
        ]
      }
    },
    fetch({store, params}) {
        store.dispatch('getPosts')
        store.dispatch('getPostWithSlug', params.slug)
    },
    computed: {
      post () {
        return this.$store.state.post
      },
      postContent () {
        let post = this.$store.state.post
        return require(`../../content/posts/1.md`)
      },
    }
}
</script>

<style>
</style>