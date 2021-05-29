<template>
  <div class="ObjectionButton">
    <button type="button">Make an Objection</button>
  </div>
</template>

<script>
export default {
  name: "MakeObjectionButton",
};
</script>

<style scoped>
.ObjectionButton {
  @apply w-full mr-4 ml-2;
}

button {
  @apply bg-blue-400 h-14 rounded-xl outline-none
    text-lg w-full font-semibold text-white;
}

button:focus {
  @apply outline-none;
}
</style>
