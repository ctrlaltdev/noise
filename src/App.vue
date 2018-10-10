<template lang="pug">
  #app
    Stream
</template>

<script>
import Stream from './components/Stream.vue'

export default {
  name: "app",
  components: {
    Stream
  }
}
</script>

<style lang="sass">
  @import '@/assets/sass/app.sass'
</style>
