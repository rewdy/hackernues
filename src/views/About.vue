<template>
  <div class="about">
    <Header />
    <h1 class="page-title">About</h1>
    <p>
      This is a super basic <a href="https://vuejs.org/">VueJS</a> application
      to display content from the well-loved
      <a href="https://news.ycombinator.com/">HackerNews</a>.
    </p>
    <p>
      I built this just as a little exercise with Vue and it's primarily for my
      own consumption. If you happen to find it... well, enjoy.
    </p>
    <p><span class="wave">👋🏽</span> <a href="https://rewdy.lol">Rewdy</a></p>
    <p><router-link to="/" class="more-link">Home</router-link></p>
  </div>
</template>

<script>
import Header from '@/components/TheHeader.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
.about {
  max-width:600px;
}
.wave {
  display:inline-block;
  position: relative;
  margin-right:0.5em;
  animation-name: wave;
  animation-duration: 1s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
@keyframes wave {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(15deg);
  }
}
</style>
