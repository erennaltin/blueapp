<template>
  <div>
    <div v-if="user !== 'Object'" class="Layout LoginTemplate">
        <p> BLUE </p>
      <router-view/>
    </div>
    <div v-else class= "Layout">
      <Navigation />
    <router-view/>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue"


export default {
  name: "App",
  components: {
    Navigation
  },
  computed: {
    user(){
      return typeof(this.$store.state.user2)
    }
  },
  mounted() {

  }
}
</script>

<style scoped lang="css">
.Layout {
  @apply w-screen h-screen bg-blue-500 overflow-hidden;
}

.LoginTemplate p {
  @apply  absolute bottom-28 left-40 text-white;
  font-size: 14rem;
}
</style>
