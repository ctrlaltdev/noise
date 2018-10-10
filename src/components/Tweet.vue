<template lang="pug">
  article.Tweet(:id="tweet.id_str")
    .Tweet__wrapper
      header.Tweet__meta
        img(:src="tweet.user.profile_image_url_https")
        .Tweet__meta__name
          p.Tweet__meta__displayname {{ tweet.user.name }}
          p.Tweet__meta__username @{{ tweet.user.screen_name }}
      .Tweet__content
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
.Tweet
  display: flex
  margin-bottom: 2rem
  font-family: 'Helvetica Neue', Helvetica, sans-serif
  &::before
    flex: 0 0 auto
    display: block
    content: ''
    width: 180px
    height: 180px
    background: center / contain no-repeat url(../assets/img/Twitter_Social_Icon_Square_White.svg)
  &__wrapper
    flex: 1 1 auto
    margin-left: 2rem
    padding: 2rem
    background-color: white
    color: #333
  &__meta
    display: flex
    align-items: center
    img
      flex: 0 0 auto
      width: 48px
      height: 48px
      border-radius: 48px
    &__name
      flex: 1 1 auto
      margin-left: 2rem
      p
        font-size: 2rem
        margin: 0
        padding: 0
    &__displayname
      font-weight: bold
  &__content
    font-size: 2rem
</style>
