<template>
  <div class="Profile">
    <CardContainer :ContainerMode="true"><ProfileContainer /></CardContainer>
  </div>
</template>

<script>
import CardContainer from "../components/CardComponents/CardContainer.vue";
import ProfileContainer from "../components/CardComponents/ProfileComponents/ProfileContainer.vue";

export default {
  name: "Profile",
  components: {
    CardContainer,
    ProfileContainer,
  },
};
</script>

<style scoped>
.Profile {
  @apply flex items-center justify-center;
}
</style>
