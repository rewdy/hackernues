<template>
  <li class="story-item">
    <BlankStory v-if="loading" />
    <transition name="fade-in">
      <div v-if="!loading">
        <h2 class="story-title">
          <a :href="url" target="_blank">{{ title }}
            <small class="story-domain">{{ url | domain }}</small>
          </a>
        </h2>
        <div>
          <span class="story-meta">{{ score }} <span class="story-meta-label">points</span></span>
          <span class="story-meta"
            ><span class="story-meta-label">Time:</span> {{ timeSince }}</span
          >
          <span class="story-meta" style="padding-bottom:1px;">
            <a :href="hnSourceUrl" target="_blank" title="HackerNews URL">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-external-link"
              >
                <path
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                ></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </transition>
  </li>
</template>

<script>
import moment from 'moment';

import BlankStory from '@/components/stories/TheBlankStory.vue';

export default {
  name: 'StoryRow',
  props: {
    storyId: {
      type: Number,
      default: 0,
    },
  },
  components: {
    BlankStory,
  },
  data() {
    return {
      loading: true,
      title: '',
      by: '',
      url: '',
      score: 0,
      time: '',
    };
  },
  computed: {
    storyUri() {
      return (
        `https://hacker-news.firebaseio.com/v0/item/${
          this.storyId
        }.json?print=pretty`
      );
    },
    hnSourceUrl() {
      return `https://news.ycombinator.com/item?id=${this.storyId}`;
    },
    timeSince() {
      const oneWeekAgo = moment().subtract(7, 'days');
      const time = moment.unix(this.time);
      if (time.isAfter(oneWeekAgo)) {
        return time.fromNow();
      }
      return time.format('lll');
    },
  },
  methods: {
    updateStory() {
      this.loading = true;
      this.$http.get(this.storyUri).then(
        (response) => {
          this.loading = false;
          this.by = response.data.by;
          this.title = response.data.title;
          this.url = response.data.url;
          this.score = response.data.score;
          this.time = response.data.time;
        },
        (error) => {
          this.loading = false;
          console.log(`Loading error: ${error}`);
        },
      );
    },
  },
  filters: {
    domain(value) {
      if (value) {
        return value.split('//')[1].split('/')[0];
      }
      return '';
    },
  },
  mounted() {
    this.updateStory();
  },
};
</script>

<style lang="scss">
.story-item {
  position: relative;
  padding: 1em 0 1.5em;
  border-bottom: 1px solid $line-color;
}
h2.story-title {
  margin-bottom: 5px;
}
.story-domain {
  font-weight: $font-weight-normal;
  color: $text-light;
}
.story-meta {
  display: inline-block;
  margin-right: 0.5em;
  padding: 0 0.5em;
  background-color: $screen-lt;
}
.story-meta-label {
  color: $text-light;
  font-size: 0.8em;
  text-transform: uppercase;
}
@media (prefers-color-scheme: dark) {
  .story-item {
    border-bottom-color:darken($line-color, 70%);
  }
  .story-meta {
    background-color: lighten($text-color, 15%);
    color:$text-light;
  }
  .story-meta-label {
    color:darken($text-light, 15%)
  }
}
</style>
