<template>
  <div @load="getUser(user)" class="Check"></div>
  <p>Redirecting...</p>
</template>

<script>
import { watch } from "vue";
import { useQuery, useResult } from "@vue/apollo-composable";
import checkUserQuery from "@/graphql/checkUser.query.gql";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "index",
  setup() {
    const router = useRouter();
    const store = useStore();
    const getUser = (user) => store.dispatch("getUser", user);
    const { result, loading } = useQuery(checkUserQuery);
    const user = useResult(result, null, (data) => data.me);

    watch(loading, (newValue) => {
      if (!newValue && user.value === null) {
        router.push("/login");
      } else {
        getUser(user);
        router.push("/Home/discover");
      }
    });

    return {
      store,
      getUser,
      user,
    };
  },
};
</script>

<style scoped></style>
