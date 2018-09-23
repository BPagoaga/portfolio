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
  watch: {
    show() {
      //this.show = makeStore.state.show
    }
  },
  mounted() {},
}
</script>