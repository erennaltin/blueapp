<template>
  <div :class="className">
    <img :src="source" />
  </div>
</template>

<script>
export default {
  name: "ProfileCircle",
  props: {
    size: {
      type: String,
      default: "sm",
    },
    photo: {
      type: String,
      default: "userdefault.png",
    },
  },
  computed: {
    className: function () {
      return `circle ${this.size}`;
    },
    serverMedia() {
      return this.$store.state.serverMedia
    }
    source() {
      return (
        `${this.serverMedia}${this.photo}` ||
        "https://bluebackend.herokuapp.com/media/userdefault.png""
      );
    },
  },
};
</script>

<style scoped>
.circle {
  @apply border-2 border-gray-300 rounded-full overflow-hidden;
}

.sm {
  @apply w-10 h-10;
}

.xl {
  @apply w-24 h-24;
}
</style>
