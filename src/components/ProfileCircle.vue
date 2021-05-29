<template>
  <div :class="className">
    <img :src="source" @click="goProfile" />
    <!-- <cld-image publicId="24cbef96-1f11-4ad1-8b0e-d5b9d70447a1.jpg" /> -->
  </div>
</template>

<script>
export default {
  name: "ProfileCircle",
  components: {
    // CldImage,
  },
  props: {
    size: {
      type: String,
      default: "sm",
    },
    photo: {
      type: String,
      default: "userdefault.png",
    },
    username: String,
  },
  computed: {
    className: function () {
      return `circle ${this.size}`;
    },
    serverMedia() {
      return this.$store.state.serverMedia;
    },
    source() {
      return `${this.photo}` || "https://bluebackend.herokuapp.com/media/userdefault.png";
    },
  },
  methods: {
    goProfile() {
      this.$router.push("/profile/" + this.username);
    },
  },
};
</script>

<style scoped>
.circle {
  @apply border-2 border-gray-300 rounded-full overflow-hidden cursor-pointer;
}

.sm {
  @apply w-10 h-10;
}

.xl {
  @apply w-24 h-24;
}
</style>
