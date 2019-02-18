<template>
  <header>
    <h1>PHP &amp; Javascript Web Developer in Lille
      <br>Bernard Pagoaga
    </h1>

    <br>
    <!-- <a href="#about" class="btn btn-dark btn-lg">Find Out More</a>-->
    <nav class="social-media">
      <ul class="list-inline">
        <li>
          <a href="https://www.facebook.com/people/Bernard-Pagoaga/100009005267393" target="_blank">
            <i class="fab fa-facebook-f"/>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/bpagoaga?lang=fr" target="_blank">
            <i class="fab fa-twitter"/>
          </a>
        </li>
        <li>
          <a href="https://fr.linkedin.com/in/bernard-pagoaga-a7307470" target="_blank">
            <i class="fab fa-linkedin"/>
          </a>
        </li>
        <li>
          <a href="https://github.com/BPagoaga" target="_blank">
            <i class="fab fa-github"/>
          </a>
        </li>
        <li>
          <a href="http://codepen.io/BPagoaga/#" target="_blank">
            <i class="fab fa-codepen"/>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  mounted() {},
  methods: {
    onClickBurger() {
      //makeStore.toggleShowAction()
    }
  }
};
</script>
