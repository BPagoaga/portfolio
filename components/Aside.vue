<template>
    <aside v-show="show">je suis la sidebar</aside>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  mounted() {},
  watch: {
    show() {
      //this.show = makeStore.state.show
    }
  }
}
</script>