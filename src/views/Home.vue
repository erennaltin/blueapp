<template>
  <div class="Home">
    <div class="ArrowContainer">
      <right-arrow v-if="!ContainerMode" @click="reload">
        ←
        <span class="text">See new</span>
      </right-arrow>

      <CardContainer :class="ContainerClass" :ContainerMode="ContainerMode" id="card1">
        <HomeContainer
          :ContainerMode="ContainerMode"
          :changeContainerMode="changeContainerMode"
        />
      </CardContainer>
      <right-arrow @click="changeContainerMode" v-if="!ContainerMode">
        <span class="text">See detail</span>
        →
      </right-arrow>
    </div>
    <div class="ControlButtons">
      <ControlButton Component="Approve" v-if="Mode !== 'Approve'" @click="addApprove" />
      <ControlButton
        Component="Decline"
        v-if="Mode !== 'Decline'"
        @click="removeApprove"
      />
      <ControlButton Component="Objection" @click="setObjection" />
      <ControlButton
        Component="Comment"
        @click="
          () => {
            ContainerMode === false ? changeContainerMode() : '';
          }
        "
      />
    </div>
  </div>
</template>

<script>
import CardContainer from "../components/CardComponents/CardContainer.vue";
import ControlButton from "../components/ControlButton.vue";
import HomeContainer from "../components/CardComponents/HomeComponents/HomeContainer.vue";
import { useMutation, useQuery, useResult } from "@vue/apollo-composable";
import getRandomPostQuery from "@/graphql/getRandomPost.query.gql";
import addApprovalMutation from "@/graphql/addApproval.mutation.gql";
import removeApproveMutation from "@/graphql/removeApproval.mutation.gql";
import checkApprovalQuery from "@/graphql/checkApproval.query.gql";
import checkDeclineQuery from "@/graphql/checkDecline.query.gql";

import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import RightArrow from "../components/CardComponents/HomeComponents/rightArrow.vue";

export default {
  name: "Home",
  components: {
    CardContainer,
    ControlButton,
    HomeContainer,
    RightArrow,
  },
  computed: {
    ContainerClass() {
      return `CardContainer ${this.ContainerMode}`;
    },
  },
  data() {
    return {
      ContainerMode: false,
      PostClassifier: "Vertical",
    };
  },
  methods: {
    changeContainerMode() {
      this.ContainerMode = !this.ContainerMode;
      if (this.PostClassifier === "Vertical") {
        this.PostClassifier = "Horizental";
      } else {
        this.PostClassifier = "Vertical";
      }
    },
    reload() {
      if (
        this.$route.fullPath == "/home/discover" ||
        this.$route.fullPath === "/Home/discover"
      ) {
        location.reload();
      } else {
        this.$router.replace("/home/discover");
        setTimeout(() => {
          location.reload();
        }, 10);
      }
    },
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const slug = route.params.slug;

    const { result, loading } = useQuery(getRandomPostQuery, () => ({
      uuid: slug,
    }));
    const RandomPost = useResult(result, {}, (data) => data.randomPost);
    const store = useStore();
    const Mode = computed(() => store.state.Mode);
    const makeObjection = (objection) => store.dispatch("makeObjection", objection);
    const getPost = (post) => store.dispatch("getPost", post);
    const changeMode = (payload) => store.dispatch("changeMode", payload);

    const post = ref(store.state.InitialPost);
    const user = ref(store.state.user2);

    if (user.value.firstName == "") {
      router.replace("/update");
    }
    watch(loading, () => {
      getPost(RandomPost.value);
      post.value = store.state.InitialPost;
      user.value = store.state.user2;
    });

    const { mutate: addApprove, onDone } = useMutation(addApprovalMutation, () => ({
      variables: {
        postUuid: post.value.uuid,
        username: user.value.username,
      },
    }));

    onDone(() => {
      changeMode({ Mode: "Approve" });
    });

    const { result: checkApproval, loading: checkLoading } = useQuery(
      checkApprovalQuery,
      () => ({
        name: post.value.uuid + "+" + user.value.username,
      })
    );
    const ifApproval = useResult(checkApproval);
    watch(checkLoading, () => {
      if (ifApproval.value.name === "True") {
        changeMode({ Mode: "Approve" });
      }
    });

    const { result: checkDecline, loading: DeclineLoading } = useQuery(
      checkDeclineQuery,
      () => ({
        name: post.value.uuid + "+" + user.value.username,
      })
    );
    const ifDecline = useResult(checkDecline);
    watch(DeclineLoading, () => {
      if (ifDecline.value.name === "True") {
        changeMode({ Mode: "Decline" });
      }
    });

    const { mutate: removeApprove, onDone: Remove } = useMutation(
      removeApproveMutation,
      () => ({
        variables: {
          postUuid: post.value.uuid,
          username: user.value.username,
        },
      })
    );

    Remove(() => {
      changeMode({ Mode: "Decline" });
    });

    const setObjection = () => {
      makeObjection({ ObjectionTo: post.value.uuid });
      router.push("/create");
    };
    return {
      RandomPost,
      Mode,
      addApprove,
      post,
      user,
      ifApproval,
      removeApprove,
      setObjection,
    };
  },
};
</script>

<style scoped>
.Home {
  @apply flex flex-col items-center justify-center;
}

.ArrowContainer {
  @apply flex items-center;
}
.ControlButtons {
  @apply flex justify-between mt-4 overflow-hidden;
  max-width: 650px;
  min-width: 550px;
}

.text {
  @apply text-2xl cursor-pointer;
}

.text:hover {
  @apply underline;
}
</style>
