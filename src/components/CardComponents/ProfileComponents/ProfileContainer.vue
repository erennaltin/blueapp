<template>
  <div class="ProfileContainer">
    <ProfileSection :user="User || user" />
    <SectionContainer title="Objections" />
    <SectionContainer
      v-if="!loading"
      title="Supported Statements"
      :information="User.Approvals"
      isLast="last"
    />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { useQuery, useResult } from "@vue/apollo-composable";
import getProfileQuery from "@/graphql/getProfile.query.gql";
import SectionContainer from "../SectionContainer.vue";
import ProfileSection from "./ProfileSection.vue";
export default {
  name: "ProfileContainer",
  components: {
    ProfileSection,
    SectionContainer,
  },
  setup() {
    const store = useStore();
    // const Approvals = store.state.user2.Approvals;
    const user = store.state.user2;

    const route = useRoute();
    const { result, loading } = useQuery(getProfileQuery, () => ({
      username: route.params.slug,
    }));
    const User = useResult(result, null);
    return { store, user, loading, User };
  },
};
</script>

<style scoped>
.ProfileContainer {
  @apply flex;
  border-radius: 2rem;
}
</style>
