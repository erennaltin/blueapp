<template>
  <div @load="getUser(user)" class="Check"></div>
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
    // const route = useRoute()
    console.log(router);
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
    // if(user.value === null) {
    //     console.log(user.value)
    //     router.push('/login')
    // }
    // else {
    //     router.back()
    // }

    return {
      store,
      getUser,
      user,
    };
  },
};
</script>

<style scoped></style>
