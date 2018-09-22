<template>
    <header>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Logo Bernard Pagoaga Développeur Front-End Javascript Lille" width="112" height="28">
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="onClickBurger">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div class="navbar-menu">
                <div class="navbar-start">
                    <!-- navbar items -->
                </div>

                <div class="navbar-end">
                    <!-- navbar items -->
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
  data() {
    return {
      show: false
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