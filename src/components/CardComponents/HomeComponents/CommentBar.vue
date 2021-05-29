<template>
  <div class="addComment">
    <input
      type="text"
      maxlength="400"
      v-model="newComment"
      placeholder="You had a great point!"
    />
    <button @click="addComment" type="submit"><SendComment /></button>
  </div>
</template>

<script>
import SendComment from "@/assets/Icons/SendComment.svg";
import { computed, ref } from "vue";
import { useMutation } from "@vue/apollo-composable";
import addCommentsMutation from "@/graphql/addComments.mutation.gql";
import getPostByUUIDQuery from "@/graphql/getPostByUUID.query.gql";
import { useStore } from "vuex";
import defaultClient from "@/main.js";

export default {
  name: "CommentBar",
  components: {
    SendComment,
  },
  setup() {
    const newComment = ref("");
    const store = useStore();
    const user = computed(() => store.state.user2);
    const post = computed(() => store.state.InitialPost);
    const getPost = (post) => store.dispatch("getPost", post);

    const { mutate: addComment, onDone } = useMutation(addCommentsMutation, () => ({
      variables: {
        postUuid: post.value.uuid,
        username: user.value.username,
        Text: newComment.value,
      },
    }));

    onDone((result) => {
      console.log(result.data.addComment);
      if (result.data.addComment.comment.name !== "False") {
        defaultClient
          .query({
            query: getPostByUUIDQuery,
            variables: {
              uuid: post.value.uuid,
            },
            fetchPolicy: "no-cache",
          })
          .then((res) => {
            console.log(res);
            console.log(res.data.posts[0]);
            getPost(res.data.posts[0]);
          });
      }
    });

    return { newComment, addComment, getPost, user, post };
  },
};
</script>

<style scoped>
.addComment {
  @apply h-14
    border-4 rounded-xl
    flex w-full mr-4 ml-2 items-center justify-between;
  z-index: 1;
}

input {
  @apply bg-gray-50 ml-4 mr-2 w-full;
}

input:focus {
  @apply outline-none;
}

button:focus {
  @apply outline-none;
}
</style>
