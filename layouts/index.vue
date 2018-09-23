<template>
  <section class="grid">
    <Header />
    <Aside />
    <Main />
    <Footer />
  </section>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Main from '@/components/Main'
import Aside from '@/components/Aside'
export default {
  components: { Header, Main, Aside, Footer },
  data() {
    return {}
  },
  mounted() {
    console.log('Hello World')
  }
}
</script>