<template>
  <div class="StatementFragment" @click="goToPost">
    <div class="Review">
      <img :src="post.Photo" />
      <div class="Title">
        <h1>{{ post.Title }}</h1>
        <h2 v-if="post.ObjectionTo !== '00000000-0000-0000-0000-000000000000'">
          OBJECTION
        </h2>
      </div>
    </div>
    <div class="informations">
      <div class="informationFragment">
        <h1>{{ post.Approvals.length }}</h1>
        <p>Approvals</p>
      </div>
      <div class="informationFragment">
        <h1>{{ post.Declines.length }}</h1>
        <p>Declines</p>
      </div>
      <div class="informationFragment">
        <h1>{{ post.Objections.totalCount }}</h1>
        <p>Objections</p>
      </div>
      <div class="informationFragment">
        <h1>{{ post.Comments.length }}</h1>
        <p>Comments</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatementFragment",
  props: {
    post: Object,
  },
  computed: {
    serverMedia() {
      return this.$store.state.serverMedia;
    },
  },
  methods: {
    goToPost() {
      this.$router.replace(`/Home/${this.post.uuid}`);
    },
  },
};
</script>

<style scoped>
.StatementFragment {
  @apply h-64 w-144 bg-gray-100 mt-4 ml-4
    flex
    border-4 rounded-3xl text-gray-400
    cursor-pointer;
}

.Review {
  @apply ml-2 h-full;
}

img {
  @apply h-52 w-96 rounded-l-xl mt-2;
}

h1 {
  @apply text-gray-500 font-bold text-lg mr-2;
}

.informations {
  @apply ml-4 flex flex-col justify-evenly h-52 mt-2 font-semibold;
}

.informationFragment {
  @apply flex items-center;
}

.Title {
  @apply flex justify-between items-center;
}

h2 {
  @apply font-bold;
}
</style>
