<template>
  <div class="CreateContainer">
    <form method="POST" @submit.prevent="CreatePost">
      <div v-if="step === 0">
        <label v-if="Title != ''" for="titleInput">Title</label>
        <input
          type="text"
          id="titleInput"
          name="titleInput"
          placeholder="Title"
          v-model="Title"
        />
      </div>
      <div v-if="step === 0">
        <label for="textInput">Text</label>
        <textarea v-model="Text" />
      </div>
      <div v-if="step === 1">
        <label v-if="Category != ''" for="categoryInput">Category</label>
        <input
          type="text"
          id="categoryInput"
          name="categoryInput"
          placeholder="Category"
          v-model="Category"
        />
      </div>
      <div v-if="step === 1">
        <label for="Tags">Tags</label>
        <textarea
          v-model="Tags"
          placeholder="Please write your tags with commas. For Example: racism,government,issues"
        />
      </div>
      <div v-if="step === 2">
        <label>Choose a photo!</label>
        <progress :value="uploadValue" max="100" />
        <input type="file" accept="image/*" id="uploadInput" @change="uploadPhoto" />
        <img :src="photo" class="Preview" />
      </div>

      <input type="submit" value="Create" v-if="step === 2" />
      <input type="button" @click="nextStep" value="Next" v-else />
    </form>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useMutation } from "@vue/apollo-composable";
import createPostMutation from "@/graphql/createPost.mutation.gql";
// import uploadPhotoMutation from "@/graphql/uploadPhoto.mutation.gql";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import firebaseApp from "@/firebase";
// import defaultClient from "@/main.js";

export default {
  name: "CreateContainer",
  components: {},
  setup() {
    const store = useStore();
    const router = useRouter();
    const step = ref(0);
    const Title = ref("");
    const Text = ref("");
    const Category = ref("");
    const Tags = ref("");
    const photo = ref("");
    const imageData = ref("");
    const uploadValue = ref(0);
    const ObjectionTo = computed(() => store.state.ObjectionTo);

    const nextStep = () => {
      if (step.value === 0 && Title.value !== "" && Text.value !== "") {
        step.value++;
        return 0;
      } else if (Title.value === "") {
        alert("Write a Title!");
        return 0;
      } else if (Text.value === "") {
        alert("Write a Text!");
        return 0;
      }
      if (step.value === 1 && Category.value !== "") {
        step.value++;
      } else if (Category.value === "") {
        alert("Write a Category!");
        return 0;
      }
    };

    const { mutate: CreatePost, onDone } = useMutation(createPostMutation, () => ({
      variables: {
        postData: {
          Owner: store.state.user2.username,
          Title: Title.value,
          Text: Text.value,
          Tags: Tags.value,
          Category: Category.value,
          Photo: photo.value,
          ObjectionTo: ObjectionTo.value,
        },
      },
    }));
    onDone((result) => {
      router.push("/home/" + result.data.addPost.post.uuid);
    });

    const previewImage = (e) => {
      imageData.value = e.target.files[0];
    };
    const uploadPhoto = (e) => {
      imageData.value = e.target.files[0];
      console.log(imageData);
      const storageRef = firebaseApp
        .storage()
        .ref(`${imageData.value.name}`)
        .put(imageData.value);
      storageRef.on(
        "state_changed",
        (snapshot) => {
          uploadValue.value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          uploadValue.value = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            console.log(url);
            photo.value = url;
          });
        }
      );
    };

    return {
      Title,
      Text,
      Category,
      Tags,
      nextStep,
      step,
      CreatePost,
      uploadPhoto,
      photo,
      previewImage,
      uploadValue,
      ObjectionTo,
    };
  },
};
</script>

<style scoped>
.CreateContainer {
  @apply w-full h-full items-center justify-items-center;
}

.CreateContainer form {
  @apply flex flex-col items-center justify-evenly h-full;
}

.CreateContainer div {
  @apply flex flex-col items-center;
}

.CreateContainer input[type="text"],
input[type="password"] {
  @apply border-b-4 border-gray-300 text-xl w-112;
}

.CreateContainer input[type="text"]:focus-within,
input[type="password"]:focus-within {
  @apply text-blue-400 border-blue-400;
}

.CreateContainer input[type="text"]:focus::placeholder,
input[type="password"]:focus::placeholder {
  @apply text-blue-400;
}

.CreateContainer label {
  @apply self-start font-semibold text-gray-400;
}

.CreateContainer input[type="submit"],
input[type="button"] {
  @apply p-4 w-80 text-2xl bg-blue-400 text-white rounded-xl transition;
}

.CreateContainer input[type="submit"]:hover,
input[type="button"]:hover {
  @apply bg-blue-500;
}

.CreateContainer textarea {
  @apply border-4 h-80 resize-none 
    w-112;
}

.Preview {
  @apply w-full pl-4 pr-4 h-80 rounded mt-4;
}
</style>
