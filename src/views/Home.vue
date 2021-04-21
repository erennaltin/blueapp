<template>
  <div class="Home">
      <CardContainer class="card" id="card1" />
      <div class="ControlButtons">
        <ControlButton Component="Approve" />
        <ControlButton Component="Decline" />
        <ControlButton Component="Objection" />
        <ControlButton Component="Comment" />

      </div>
  </div>
</template>

<script>
import CardContainer from '../components/CardComponents/CardContainer.vue'
import ControlButton from '../components/ControlButton.vue'

export default {
  name: 'Home',
  components: {
    CardContainer,
    ControlButton
  },
}
</script>

<style scoped>
.Home {
  @apply flex flex-col items-center justify-center
  mt-6
  overflow-hidden;
}

.ControlButtons {
  @apply flex justify-between mt-4;
  max-width: 650px;
  min-width: 550px;
}

</style>