<template>
  <div class="BottomLine">
    <ul class="Tags">
      <li v-for="tag in tagArray" :key="tag">{{ `#${tag}` }}</li>
    </ul>
    <Settings
      v-if="slug !== 'discover' && InitialPost.Owner.username === user.username"
      @click="removePost"
      class="Settings"
    />
  </div>
</template>

<script>
import Settings from "@/assets/Icons/Delete.svg";
import removePostMutation from "@/graphql/removePost.mutation.gql";
import { useMutation } from "@vue/apollo-composable";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "CardTags",
  components: {
    Settings,
  },
  props: {
    homePost: Object,
    InitialPost: Object,
  },
  data() {
    return {
      tagArray: [],
    };
  },

  beforeMount() {
    this.tagArray = [...this.InitialPost.Tags.split(",")] || [
      ...this.homePost.Tags.split(","),
    ];
  },
  watch: {
    InitialPost() {
      this.tagArray = [...this.InitialPost.Tags.split(",")];
    },
  },
  setup(props) {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const user = computed(() => store.state.user2);

    const slug = route.params.slug;
    const { mutate: removePost, onDone } = useMutation(removePostMutation, () => ({
      variables: {
        uuid: props.InitialPost.uuid,
      },
    }));

    onDone(() => {
      router.push("/Home/discover");
    });
    return { removePost, slug, user };
  },
};
</script>

<style scoped>
.BottomLine {
  @apply h-14 w-full
    border-gray-200 border-t-4
    grid
    grid-cols-4
    items-center;
}

.Tags {
  @apply flex
    ml-2;
}

.Tags li {
  @apply ml-2
    font-semibold
    text-lg;
}

.Settings {
  @apply w-8
    col-start-4
    justify-self-end
    mr-4;
}
</style>
