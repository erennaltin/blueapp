<template>
  <div class="CreateContainer">
    <form method="POST" @submit.prevent="CreatePost">
      <div v-if="step === 0">
        <label v-if="FirstName != ''" for="FirstNameInput">First Name</label>
        <input
          type="text"
          id="FirstNameInput"
          name="FirstNameInput"
          placeholder="First Name"
          v-model="FirstName"
        />
      </div>
      <div v-if="step === 0">
        <label v-if="LastName != ''" for="LastNameInput">Last Name</label>
        <input
          type="text"
          id="LastNameInput"
          name="LastNameInput"
          placeholder="Last Name"
          v-model="LastName"
        />
      </div>
      <div v-if="step === 1">
        <label for="bio">Biography</label>
        <textarea v-model="bio" placeholder="Your Biography..." />
      </div>
      <div v-if="step === 2">
        <label>Choose a photo!</label>
        <progress :value="uploadValue" max="100" />
        <input type="file" accept="image/*" id="uploadInput" @change="uploadPhoto" />
        <img :src="photo == '' ? PhotoInit : photo" class="Preview" />
      </div>

      <input type="submit" value="Update" v-if="step === 2" />
      <input type="button" @click="nextStep" value="Next" v-else />
    </form>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useMutation } from "@vue/apollo-composable";
import updateAccountMutation from "@/graphql/updateAccount.mutation.gql";
// import uploadPhotoMutation from "@/graphql/uploadPhoto.mutation.gql";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import firebaseApp from "@/firebase";
// import defaultClient from "@/main.js";

export default {
  name: "CreateContainer",
  components: {},
  setup() {
    const step = ref(0);
    const store = useStore();
    const FirstName = ref(store.state.user2.firstName);
    const LastName = ref(store.state.user2.lastName);
    const bio = ref(store.state.user2.bio);
    const router = useRouter();
    const photo = ref(store.state.user2.photo);
    const PhotoInit = computed(() => store.state.user2.photo);
    const imageData = ref("");
    const uploadValue = ref(0);

    const nextStep = () => {
      if (step.value === 0 && FirstName.value !== "" && LastName.value !== "") {
        step.value++;
        return 0;
      } else if (FirstName.value === "") {
        alert("Write your First Name!");
        return 0;
      } else if (LastName.value === "") {
        alert("Write your Last Name!");
        return 0;
      }
      if (step.value === 1) {
        step.value++;
      }
    };

    const { mutate: CreatePost, onDone } = useMutation(updateAccountMutation, () => ({
      variables: {
        username: store.state.user2.username,
        firstName: FirstName.value,
        lastName: LastName.value,
        bio: bio.value,
        photo: photo.value,
      },
    }));
    onDone((result) => {
      router.push("/profile/" + result.data.updateAccount.account.username);
      setTimeout(() => location.reload(), 100);
    });

    const previewImage = (e) => {
      imageData.value = e.target.files[0];
    };
    const uploadPhoto = (e) => {
      imageData.value = e.target.files[0];
      const storageRef = firebaseApp
        .storage()
        .ref(`${imageData.value.name}`)
        .put(imageData.value);
      storageRef.on(
        "state_changed",
        (snapshot) => {
          uploadValue.value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        () => {},
        () => {
          uploadValue.value = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            photo.value = url;
          });
        }
      );
    };

    return {
      FirstName,
      LastName,
      bio,
      nextStep,
      step,
      CreatePost,
      uploadPhoto,
      photo,
      previewImage,
      uploadValue,
      PhotoInit,
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
  @apply pl-4 pr-4 h-80 w-80 rounded-full mt-4;
}
</style>
