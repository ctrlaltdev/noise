<template lang="pug">
  .StopNoise
    span Stop the noise
</template>

<script>
export default {
  name: "StopNoise"
}
</script>

<style scoped lang="sass">
.StopNoise
  position: fixed
  display: flex
  align-items: center
  justify-content: center
  top: calc(50vh - 10rem)
  left: calc(50vw - 40rem)
  width: 80rem
  height: 20rem
  border: 2rem solid Gold
  background-color: rgba(0,0,0,0.4)
  opacity: 0
  animation: 5s fadeIn forwards
  span
    text-transform: uppercase
    color: Gold
    font-size: 5rem
    font-family: 'Bowlby One SC', Arial, sans-serif
    text-align: center

@keyframes fadeIn
  from
    opacity: 0
  70%
    opacity: 0
  to
    opacity: 1
</style>
