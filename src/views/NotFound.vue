<template>
  <div class="not-found">
    <transition name="zoom-in" appear>
      <div class="box">
        <h1>Yikes!</h1>
        <p>The page you're trying to access does not exist.</p>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
.box {
  border: 1px solid $line-color;
  max-width: 400px;
  margin: 0 auto;
  padding: $margin-standard;
}
</style>
