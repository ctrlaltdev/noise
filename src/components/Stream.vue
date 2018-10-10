<template lang="pug">
  .Stream
    Tweet(v-for="tweet in tweets" :tweet="tweet" :key="tweet.id")
</template>

<script>
import Tweet from './Tweet.vue'

export default {
  name: "Stream",
  computed: {
    tweets() { return this.$store.state.tweets }
  },
  components: {
    Tweet
  }
}
</script>

<style scoped lang="sass">

</style>
