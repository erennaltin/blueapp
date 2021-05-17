<template>
  <div class="ControlPanel">
    <h1>BLUE</h1>
    <ul>
      <li><router-link to="/home/discover">Home</router-link></li>
      <li @click="goToProfile"><router-link to="#">Profile</router-link></li>
      <li @click="goToCreate"><router-link to="#">Make a statement</router-link></li>
    </ul>
  </div>
</template>

<script>
// import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
// import { useRoute } from "vue-router";
export default {
  name: "Navigation",
  setup() {
    // const route = useRoute();
    const store = useStore();
    const router = useRouter();

    const goToProfile = () => {
      const user = store.state.user2;
      router.replace(`/profile/` + user.username);
    };
    const goToCreate = () => {
      router.replace("/create");
    };

    return { goToProfile, goToCreate };
  },
};
</script>

<style scoped>
.ControlPanel {
  @apply text-white
    flex
    h-14 w-full
    items-center
    justify-evenly mb-6;
}

.ControlPanel ul {
  @apply flex
    ml-2
    justify-self-end;
}

.ControlPanel ul li {
  @apply ml-8
    text-xl
    font-semibold;
}

h1 {
  @apply text-3xl
    font-bold;
}
</style>
