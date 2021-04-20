<template>
  <div class="Home">
      <CardContainer class="card" id="card1" />
  </div>
</template>

<script>
import CardContainer from '../components/CardComponents/CardContainer.vue'

export default {
  name: 'Home',
  components: {
    CardContainer
  },
}
</script>

<style scoped>
.Home {
  @apply flex items-center justify-center
  mt-6
  overflow-hidden;
}

</style>