<template>
  <div class="Comment">
    <profile-circle
      @click="goProfile(fragment.post.Owner.username)"
      class="touchable"
      size="sm"
      v-if="title === 'Supported Statements'"
      :photo="fragment.post.Owner.photo"
    />
    <profile-circle
      @click="goProfile(fragment.node.Owner.username)"
      class="touchable"
      size="sm"
      v-else-if="title === 'Objections'"
      :photo="fragment.node.Owner.photo"
    />
    <profile-circle
      @click="goProfile(fragment.user.username)"
      class="touchable"
      size="sm"
      v-else
      :photo="fragment.user.photo"
    />
    <div class="Container">
      <p
        v-if="title === 'Comments' && fragment.user.username == user.username"
        @click="removeComment"
        class="deleteButton"
      >
        x
      </p>
      <p v-if="title === 'Supported Statements'">{{ fragment.post.Title }}</p>
      <p
        v-else-if="title === 'Objections'"
        @click="goPost(fragment.node.uuid)"
        class="touchable"
      >
        {{ fragment.node.Title }}
      </p>
      <p v-else>{{ fragment.Text }}</p>
      <div v-if="title === 'Objections'" class="Informations">
        <p @click="goProfile(fragment.node.Owner.username)" class="touchable">
          {{ fragment.node.Owner.username }}
        </p>
        <p>{{ PublishDateObjection }}</p>
      </div>
      <div v-if="title === 'Comments'" class="Informations">
        <p @click="goProfile(fragment.user.username)" class="touchable">
          {{ fragment.user.username }}
        </p>
        <p>{{ PublishDate }}</p>
      </div>
      <div v-if="title === 'Supported Statements'" class="Informations">
        <p @click="goProfile(fragment.post.Owner.username)" class="touchable">
          {{ fragment.post.Owner.username }}
        </p>
        <p>{{ PublishDate }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useMutation } from "@vue/apollo-composable";
import ProfileCircle from "../ProfileCircle.vue";
import removeCommentMutation from "@/graphql/removeComment.mutation.gql";
import { useStore } from "vuex";
import defaultClient from "@/main.js";
import getPostByUUIDQuery from "@/graphql/getPostByUUID.query.gql";
import { computed } from "vue";

export default {
  name: "Fragment",
  components: {
    ProfileCircle,
  },
  props: {
    fragment: Object,
    title: String,
  },
  computed: {
    PublishDate() {
      let date = this.fragment.Time.slice(0, 10);
      let clock = this.fragment.Time.slice(11, 16);
      return `${date} - ${clock} UTC`;
    },
    PublishDateObjection() {
      let date = this.fragment.node.PublishDate.slice(0, 10);
      let clock = this.fragment.node.PublishDate.slice(11, 16);
      return `${date} - ${clock} UTC`;
    },
  },
  methods: {
    goProfile(username) {
      this.$router.replace("/profile/" + username);
    },
    goPost(uuid) {
      this.$router.replace("/home/" + uuid);
      setTimeout(() => location.reload(), 10);
    },
  },
  setup(props) {
    const store = useStore();
    const user = computed(() => store.state.user2);
    const post = store.state.InitialPost;
    const getPost = (post) => store.dispatch("getPost", post);

    const { mutate: removeComment, onDone } = useMutation(removeCommentMutation, () => ({
      variables: {
        name: props.fragment.name,
      },
    }));

    onDone(() => {
      defaultClient.resetStore();
      setTimeout(() => {
        defaultClient
          .query({
            query: getPostByUUIDQuery,
            variables: {
              uuid: props.fragment.post.uuid,
            },
            fetchPolicy: "only-network",
          })
          .then((res) => {
            getPost(res.data.posts[0]);
          });
      });
    }, 10);

    return { removeComment, user, post, getPost };
  },
};
</script>

<style scoped>
.Comment {
  @apply flex mt-4 ml-2 flex-wrap;
}

.Container {
  @apply w-72 ml-4 items-center flex-wrap
    border-4 rounded-xl;
}

.Container .Informations {
  @apply flex justify-between items-center pr-2 mt-2 
    bg-gray-200 
    text-xs font-semibold opacity-40;
}

.Container p {
  @apply ml-2 break-words;
}

.touchable {
  @apply cursor-pointer;
}

.touchable:hover {
  @apply underline;
}

.deleteButton {
  @apply text-right pr-2 text-gray-400 cursor-pointer;
}

.deleteButton:hover {
  @apply text-gray-500;
}
</style>
