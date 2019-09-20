<template>
  <div class="fake-story">
    <h2 class="story-title">
      <span class="fake-block" style="width:100%; max-width:600px;"></span>
    </h2>
    <div>
      <span class="story-meta fake-block" style="width:100px"></span>
      <span class="story-meta fake-block" style="width:140px"></span>
      <span class="story-meta fake-block" style="width:1.5em"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlankStory',
};
</script>

<style lang="scss">
.fake-block {
  display: inline-block;
  background-color: $screen-lt;
  min-height: 1em;
  animation-name: loading-background;
  animation-duration: 1s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
@keyframes loading-background {
  from {
    background-color: $screen-lt;
  }
  to {
    background-color: $screen;
  }
}
@media (prefers-color-scheme: dark) {
  .fake-block {
    background-color: lighten($text-color, 15%);
    color:$text-light;
  }
  @keyframes loading-background {
    from {
      background-color: lighten($text-color, 15%);
    }
    to {
      background-color: lighten($text-color, 22%);
    }
  }
}
</style>
