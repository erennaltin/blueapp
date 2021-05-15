<template>
  <div class="CreateStatement">
    <card-container><CreateContainer /></card-container>
  </div>
</template>

<script>
import CardContainer from "../components/CardComponents/CardContainer.vue";
import CreateContainer from "../components/CreateComponents/CreateContainer.vue";

export default {
  name: "CreateStatement",
  components: {
    CardContainer,
    CreateContainer,
  },
  setup() {},
};
</script>

<style scoped>
.CreateStatement {
  @apply flex items-center justify-center;
}
</style>
