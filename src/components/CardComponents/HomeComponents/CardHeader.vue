<template>
    <div :class="HeaderClass">
        <div class="Informations">
            <ProfileCircle class="sm" />
            <div class="PostInformations">
                <h1> {{username}} </h1>
                <h3> {{homePost.PublishDate}} </h3>
            </div>
        </div>
        <p :class="CategoryClass"> {{homePost.Category.toUpperCase()}} </p>
    </div>
</template>

<script>

import ProfileCircle from '../../ProfileCircle.vue'

export default {
    name: "CardHeader",
    components: {
        ProfileCircle
    },
    props: {
        homePost: Object,
        ContainerMode: Boolean,
    },
    computed: {
        username(){
            return this.$store.state.user.Username
        },
        HeaderClass(){
            return `CardHeader ${this.ContainerMode}`
        },
        CategoryClass(){
            return `Category ${this.ContainerMode}`
        }
    }
}
</script>


<style scoped>
.CardHeader {
    @apply h-14 w-full
    border-b-4 border-gray-200
    flex
    justify-between
    items-center;
}

.Category {
    @apply col-start-4
    justify-self-end
    mr-4
    text-2xl
    font-bold
    ;
    order:1;
}

.Informations {
    @apply ml-4 flex
    items-center;
}

.PostInformations h1 {
    @apply font-bold ml-4;
}

.PostInformations h3 {
    @apply whitespace-nowrap
    text-sm ml-4
    opacity-70;
}

.true {
    @apply flex-col-reverse mt-2 border-b-0 h-32 justify-between;
    max-width: 150px;
}
</style>