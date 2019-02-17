<template>
  <header>
    <v-toolbar 
      dense 
      class="white">
      <v-toolbar-title v-text="title"/>

      <v-spacer/>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn 
          icon 
          href="https://www.facebook.com/people/Bernard-Pagoaga/100009005267393" 
          target="_blank"><i class="fab fa-facebook-f" /></v-btn>
        <v-btn 
          icon 
          href="https://twitter.com/bpagoaga?lang=fr" 
          target="_blank"><i class="fab fa-twitter" /></v-btn>
        <v-btn 
          icon 
          href="https://fr.linkedin.com/in/bernard-pagoaga-a7307470" 
          target="_blank"><i class="fab fa-linkedin" /></v-btn>
        <v-btn 
          icon 
          href="https://github.com/BPagoaga" 
          target="_blank"><i class="fab fa-github" />
        </v-btn>
        <v-btn 
          icon 
          href="https://codepen.io/BPagoaga" 
          target="_blank"><i class="fab fa-codepen" />
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </header>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      title: `BPagoaga`
    }
  },
  mounted() {},
  methods: {
    onClickBurger() {
      //makeStore.toggleShowAction()
    }
  }
}
</script>