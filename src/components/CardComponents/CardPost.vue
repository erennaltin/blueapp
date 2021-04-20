<template>
    <div class="CardPost">
    <h1> {{homePost.Title}} </h1>
    <p> {{homePost.Text}} </p>
    <img :src="homePost.Photo" />
    <h2> See Details </h2>
    </div>
</template>

<script>
export default {
    name: "CardPost",
    props: {
        homePost: Object,
    }
}
</script>

<style scoped>
.CardPost {
    @apply h-full
    ml-4 mr-4;
}

h1 {
    @apply font-semibold
    text-xl
    mt-4 mb-2;
}

p {
    @apply h-52 overflow-hidden overflow-y-scroll 
    mb-8 pb-6;
-webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
  scrollbar-width: 0;
}

p::-webkit-scrollbar {
    display: none;
}

img {
    @apply w-full max-h-80 rounded-xl;
}

h2 {
    @apply text-center
    font-bold
    text-lg
    h-16 flex items-center justify-center
}
</style>