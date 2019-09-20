<template>
  <nav class="navbar">
    <router-link class="navbar-link" to="/">News</router-link> |
    <router-link class="navbar-link" to="/about">About</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style lang="scss">
.navbar {
  padding: 1em;
  text-align: center;
}
.navbar-link {
  text-decoration: none;
  &.router-link-active {
    font-weight: $font-weight-bold;
  }
}
</style>
