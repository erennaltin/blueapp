<template>
  <div>
    <!-- <div v-if="user !== 'Object'" class="Layout LoginTemplate">
        <p> BLUE </p>
      <router-view/>
    </div> -->
    <div class="Layout">
      <Navigation />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation,
  },
  computed: {
    user() {
      return typeof this.$store.state.user;
    },
  },
  mounted() {},
};
</script>

<style scoped lang="css">
.Layout {
  @apply w-screen h-screen bg-blue-500 overflow-hidden;
  z-index: -2;
}

.LoginTemplate p {
  @apply absolute bottom-28 left-40 text-white;
  font-size: 14rem;
}
</style>
