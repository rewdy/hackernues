<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/TheNavbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
#app {
  padding: 0 2rem 2rem;
  max-width: $breakpoint-xl;
  margin: 0 auto;
  @media only screen and (max-width: 767px) {
    padding:0 1rem 2rem;
  }
}
</style>
