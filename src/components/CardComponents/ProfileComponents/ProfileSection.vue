<template>
  <div class="ProfileSection">
    <div class="topBorder"></div>
    <ProfileSummary :user="user" />
    <div class="textSummary">
      <p :class="summaryClass" v-if="profilePath === 'Profile'">{{ user.bio }}</p>
      <button @click="showMore">See {{ seeMore }}</button>
    </div>
    <h1>Statements</h1>
    <hr />
    <div class="Statements">
      <StatementFragment v-for="post in posts" :key="post.Title" :post="post" />
    </div>
    <div class="SettingContainer">
      <Settings class="Settings" />
    </div>
  </div>
</template>

<script>
import ProfileSummary from "./ProfileSummary.vue";
import StatementFragment from "./StatementFragment.vue";
import Settings from "@/assets/Icons/Settings.svg";
import getPostByUsernameQuery from "@/graphql/getPostByUsername.query.gql";
import { useQuery, useResult } from "@vue/apollo-composable";

export default {
  name: "ProfileSection",
  components: {
    ProfileSummary,
    StatementFragment,
    Settings,
  },
  data() {
    return {
      seeMore: "More",
    };
  },
  props: {
    user: Object,
  },
  computed: {
    profilePath() {
      return this.$route.name;
    },
    summaryClass() {
      return `summaryText ${this.seeMore} `;
    },
    loading() {
      return this.$store.state.user;
    },
  },
  methods: {
    showMore() {
      if (this.seeMore === "More") {
        this.seeMore = "Less";
      } else {
        this.seeMore = "More";
      }
    },
  },
  setup(props) {
    const { result } = useQuery(getPostByUsernameQuery, () => ({
      username: props.user.username,
    }));
    const posts = useResult(result, []);

    return { posts };
  },
};
</script>

<style scoped>
.ProfileSection {
  @apply border-r-4 h-full overflow-hidden flex flex-col justify-between;
  width: 700px;
}

.topBorder {
  @apply w-full h-14 max-h-14 border-b-4 min-h-14;
}

.summaryText {
  @apply w-full ml-4 mt-2 pr-8 overflow-hidden;
}

.More {
  @apply h-12;
}

.Less {
  height: fit-content;
}

h1 {
  @apply font-bold text-lg ml-4;
}

.Statements {
  @apply overflow-y-scroll pb-2;
}

.Settings {
  @apply w-8 mr-4;
}

.SettingContainer {
  @apply min-h-14 flex items-center justify-end border-t-2;
}

.textSummary {
  @apply flex flex-col justify-center;
}

button {
  @apply font-semibold outline-none;
}
</style>
