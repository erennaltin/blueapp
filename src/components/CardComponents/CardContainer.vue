<template>
    <div class="CardContainer">
        <CardHeader :homePost="homePost" />
        <CardPost :homePost="homePost" />
        <CardTags :homePost="homePost" class="CardTags" />
    </div>
</template>

<script>
import CardHeader from './CardHeader.vue'
import CardPost from './CardPost.vue'
import CardTags from './CardTags.vue'

export default {
    name:"CardContainer",
    components: { 
        CardHeader,
        CardTags,
        CardPost
        },
    computed: {
        homePost(){
            return this.$store.state.homePost
        }
    }
}
</script>

<style scoped>
.CardContainer {
    width: 550px;
    height: 750px;
    @apply bg-gray-100 
    border-gray-300
    border-4
    flex
    flex-col;
    border-radius: 2rem;
}

.CardTags {
    @apply justify-self-end;
}
</style>