<template>
  <div class= "Layout">
    <ControlPanel />
  <router-view/>
  </div>
</template>

<script>
import ControlPanel from "@/components/ControlPanel.vue"


export default {
  name: "App",
  components: {
    ControlPanel
  }
}
</script>

<style scoped lang="css">
.Layout {
  @apply w-screen h-screen bg-blue-500;
}
</style>
