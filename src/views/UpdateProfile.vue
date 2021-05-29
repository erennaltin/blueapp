<template>
  <div class="CreateStatement">
    <card-container><UpdateContainer /></card-container>
  </div>
</template>

<script>
import CardContainer from "../components/CardComponents/CardContainer.vue";
import UpdateContainer from "../components/CreateComponents/UpdateContainer.vue";

export default {
  name: "CreateStatement",
  components: {
    CardContainer,
    UpdateContainer,
  },
  setup() {},
};
</script>

<style scoped>
.CreateStatement {
  @apply flex items-center justify-center;
}
</style>
