<template>
  <footer>&copy; <a href="bernardpagoaga.net">Bernard Pagoaga</a> 2015 - {{ year }}</footer>
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