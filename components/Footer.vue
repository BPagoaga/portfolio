<template>
  <v-footer>
    <v-layout 
      row 
      wrap 
      align-center>
      <v-flex xs12>
        <div class="ml-3">
          Made with
          <v-icon class="red--text">favorite</v-icon>
          by <a href="https://bernardpagoaga.net">&copy;&nbsp;Bernard Pagoaga&nbsp;| 2015 - {{ year }}</a>
        </div>
      </v-flex>
    </v-layout>
  </v-footer>
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