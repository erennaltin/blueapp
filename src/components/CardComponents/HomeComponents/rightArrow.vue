<template>
  <div class="rightArrow">
    <p><slot /></p>
  </div>
</template>

<script>
export default {
  name: "rightArrow",
};
</script>

<style scoped>
p {
  @apply text-white font-bold text-6xl flex items-center p-4;
}

rightArrow {
  @apply flex items-center;
}
</style>
