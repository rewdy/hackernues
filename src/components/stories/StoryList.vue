<template>
  <div class="stories">
    <p v-show="canGoBack">
      <router-link class="btn"
        to="/"
        v-if="canGoFirst"
        title="Go to first page">&larr;</router-link>
      <router-link class="btn" :to="'/news/' + backOffset">Newer stories</router-link>
    </p>
    <ul class="story-list">
      <li v-if="loading"><BlankStory /></li>
      <StoryRow
        v-for="storyId in storyIds"
        v-bind:key="storyId"
        v-bind:storyId="storyId"
      />
    </ul>
    <p v-show="canGoNext">
      <router-link class="btn" :to="'/news/' + nextOffset">Older stories</router-link>
    </p>
  </div>
</template>

<script>
import BlankStory from '@/components/stories/TheBlankStory.vue';
import StoryRow from '@/components/stories/StoryRow.vue';

export default {
  name: 'StoryList',
  components: {
    BlankStory,
    StoryRow,
  },
  data() {
    return {
      loading: true,
      storiesUri:
        'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty',
      storyIds: [],
      limit: 20,
      offset: 0,
    };
  },
  computed: {
    canGoNext() {
      return this.offset < 500 - this.limit;
    },
    nextOffset() {
      return this.offset * 1 + this.limit * 1;
    },
    canGoFirst() {
      return this.offset > this.limit;
    },
    canGoBack() {
      return this.offset > 0;
    },
    backOffset() {
      return (this.offset > this.limit) ? this.offset * 1 - this.limit * 1 : 0;
    },
  },
  watch: {
    $route(to) {
      if (to.params.offset) {
        this.offset = to.params.offset * 1;
        this.getStories();
      } else {
        this.offset = 0;
        this.getStories();
      }
    },
  },
  methods: {
    getStories() {
      this.loading = true;
      this.$http.get(this.storiesUri).then(
        (response) => {
          this.loading = false;
          this.storyIds = response.data.slice(
            this.offset,
            this.offset + this.limit,
          );
          document.querySelector('body').scrollIntoView(true);
        },
        (error) => {
          this.loading = false;
          console.log(`Loading error: ${error}`);
        },
      );
    },
    goNext() {
      if (this.canGoNext) {
        this.offset += this.limit;
        this.getStories();
      }
    },
    goBack() {
      if (this.canGoBack) {
        this.offset -= this.limit;
        this.getStories();
      }
    },
    goToFirst() {
      this.offset = 0;
      this.getStories();
    },
  },
  mounted() {
    if (typeof this.$route.params !== 'undefined') {
      this.offset = this.$route.params.offset * 1 || 0;
    }
    this.getStories();
  },
};
</script>

<style lang="scss">
.story-list {
  li {
    list-style: none;
    margin: 0;
  }
}
</style>
