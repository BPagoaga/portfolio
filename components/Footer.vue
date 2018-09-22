<template>
  <footer>&copy;&nbsp; <a href="https://bernardpagoaga.net">Bernard Pagoaga</a>&nbsp; 2015 - {{ year }}</footer>
</template>

<script>
export default {
  data() {
    return {
      year: null
    }
  },
  mounted() {
    this.year = new Date().getFullYear()
  }
}
</script>