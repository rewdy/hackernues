<template>
  <transition name="slow-slide" appear>
    <header class="site-header">
      <router-link to="/" class="site-title">HackerNeus</router-link>
    </header>
  </transition>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss">
.site-header {
  position: sticky;
  z-index: 1000;
  top: -0.55em;
  margin-bottom: $margin-standard;

  font-weight: $font-weight-bold;
  // text-transform: uppercase;
  letter-spacing: -0.05em;
  line-height: 1.15em;
  @include fluid-type(20rem, 68rem, 1.5rem, 6rem);

  animation-name: breathe;
  animation-duration: 4s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
.site-title {
  text-decoration: none;
  color:inherit;
  padding-right:0.15em;
  transition:all 300ms ease-out;
  margin-left:-0.05em;
  &:hover {
    color:inherit;
    background-color:fade-out(#000, 0.85);
  }
}

.slow-slide-enter-active {
  transition: transform 1500ms ease-out, opacity 1500ms ease-out;
}
.slow-slide-enter {
  opacity: 0;
  transform: translateY(0.35em);
}

@keyframes breathe {
  from {
    color: $text-color;
  }
  to {
    color: mix($text-color, $color-pop, 60%);
  }
}
@media (prefers-color-scheme: dark) {
  @keyframes breathe {
    from {
      color: lighten($link-color, 60%);
    }
    to {
      color: fade-out(lighten($link-color, 60%), 0.3);
    }
  }
}
</style>
