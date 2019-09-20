<template>
  <div class="home">
    <Header />
    <main>
      <StoryList />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/TheHeader.vue';
import StoryList from '@/components/stories/StoryList.vue';

export default {
  name: 'home',
  components: {
    Header,
    StoryList,
  },
};
</script>
