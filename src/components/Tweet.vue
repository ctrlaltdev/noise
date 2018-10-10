<template lang="pug">
  .Tweet(:id="'tweet-'+tweet.id")
    p {{ tweet.text }}
</template>

<script>
export default {
  name: "Tweet",
  props: ['tweet'],
  data() {
    return {tweet: tweet}
  }
}
</script>

<style scoped lang="sass">

</style>
