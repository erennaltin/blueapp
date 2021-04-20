<template>
  <div class="Home">
    <CardContainer />
  </div>
</template>

<script>
import CardContainer from '../components/CardComponents/CardContainer.vue'
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    CardContainer

  }
}
</script>

<style scoped>
.Home {
  @apply flex items-center justify-center
  mt-6
}
</style>