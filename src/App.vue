<template>
  <div class= "Layout">
    <Navigation />
  <router-view/>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue"


export default {
  name: "App",
  components: {
    Navigation
  }
}
</script>

<style scoped lang="css">
.Layout {
  @apply w-screen h-screen bg-blue-500 overflow-hidden;
}
</style>
