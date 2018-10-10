<template lang="pug">
  #app
    Stream
    StopNoise
</template>

<script>
import Stream from './components/Stream.vue'
import StopNoise from './components/StopNoise.vue'

export default {
  name: "app",
  components: {
    Stream,
    StopNoise
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC')

html
  font-size: 8px

html,
body
  margin: 0
  padding: 0
  background-color: #333
  color: white
</style>
