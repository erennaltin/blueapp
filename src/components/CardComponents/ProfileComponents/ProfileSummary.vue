<template>
  <div class="ProfileSummary">
    <ProfileCircle class="ProfilePageCircle" size="xl" :photo="user.photo" username="" />
    <div class="informations">
      <h1>{{ `${user.firstName} ${user.lastName}` }}</h1>
      <h3>{{ `@${user.username}` }}</h3>
      <!-- <div class="FollowingArea">
                <div class="Follow">
                    <h1> 200 </h1>
                    <p> Followers </p>
                </div>
                <div class="Follow">
                    <h1> 200 </h1>
                    <p> Following </p>
                </div>  
            </div> -->
    </div>
  </div>
</template>

<script>
import ProfileCircle from "../../ProfileCircle.vue";
export default {
  name: "ProfileSummary",
  components: {
    ProfileCircle,
  },
  props: {
    user: Object,
  },
};
</script>

<style scoped>
.ProfileSummary {
  @apply flex items-center ml-4 mt-4;
}

.informations {
  @apply ml-4;
}

h1 {
  @apply font-bold text-lg;
}

h3 {
  @apply font-semibold opacity-40;
}

.FollowingArea {
  @apply flex;
}

.Follow {
  @apply mr-4
    flex justify-center items-center;
}

.Follow h1 {
  @apply mr-1;
}

.ProfilePageCircle {
  @apply pointer-events-none;
}
</style>
