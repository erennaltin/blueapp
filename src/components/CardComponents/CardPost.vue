<template>
    <div :class="PostClass">
    <h1> {{homePost.Title}} </h1>
    <p :class="TextClass"> {{homePost.Text}} </p>
    <img :src="homePost.Photo" />
    <h2 v-if="!ContainerMode" @click="changeContainerMode"> See Details </h2>
    </div>
</template>

<script>
export default {
    name: "CardPost",
    props: {
        homePost: Object,
        changeContainerMode: Function,
        ContainerMode: Boolean
    },
    computed: {
        PostClass(){
            return `CardPost ${this.ContainerMode}`
        },
        TextClass(){
            return `Text${this.ContainerMode}`
        }
    }
}
</script>

<style scoped>
.CardPost {
    @apply ml-4 mr-4;
}

.true {
    max-width: 500px;
    @apply overflow-y-scroll;
}

h1 {
    @apply font-semibold
    text-xl
    mt-4 mb-2;
}

p {
    @apply overflow-hidden overflow-y-scroll 
    mb-8 pb-6;

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
    h-16 flex items-center justify-center;
}

.Textfalse {
    @apply h-52;
    -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
    mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
    scrollbar-width: 0;
}

.Texttrue {
    height: fit-content;
}
</style>