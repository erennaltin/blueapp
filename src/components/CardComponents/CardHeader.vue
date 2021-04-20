<template>
    <div class="CardHeader">
        <div class="Informations">
            <ProfileCircle class="sm" />
            <div class="PostInformations">
                <h1> {{username}} </h1>
                <h3> {{homePost.PublishDate}} </h3>
            </div>
        </div>
        <p class="Category"> {{homePost.Category}} </p>
    </div>
</template>

<script>

import ProfileCircle from '../ProfileCircle.vue'

export default {
    name: "CardHeader",
    components: {
        ProfileCircle
    },
    props: {
        homePost: Object
    },
    computed: {
        username(){
            return this.$store.state.user.Username
        },
    }
}
</script>


<style scoped>
.CardHeader {
    @apply h-14 w-full
    border-b-4 border-gray-200
    grid
    grid-cols-4
    items-center;
}

.Category {
    @apply col-start-4
    justify-self-end
    mr-4
    text-2xl
    font-bold
    ;
}

.Informations {
    @apply ml-4 grid
    grid-cols-2
    items-center;
}

.PostInformations h1 {
    @apply font-bold;
}

.PostInformations h3 {
    @apply whitespace-nowrap
    text-sm
    opacity-70
}
</style>