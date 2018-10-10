<template lang="pug">
  .Stream
    Tweet(v-for="tweet in tweets" :tweet="tweet" :key="tweet.id_str")
</template>

<script>
import Tweet from './Tweet.vue'

export default {
  name: "Stream",
  computed: {
    tweets() { return this.$store.state.tweets }
  },
  created() {
    this.$store.dispatch("fetchTweets")
  },
  components: {
    Tweet
  }
}
</script>

<style scoped lang="sass">
.Stream
  max-width: 850px
  margin: 2rem auto
  filter: blur(0)
  animation: 5s blurIn forwards

@keyframes blurIn
  from
    filter: blur(0)
  70%
    filter: blur(0)
  to
    filter: blur(2rem)
</style>
