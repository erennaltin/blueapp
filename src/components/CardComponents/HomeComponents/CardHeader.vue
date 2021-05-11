<template>
    <div :class="HeaderClass">
        <div class="Informations">
            <ProfileCircle class="sm" />
            <div class="PostInformations">
                <h1> {{user2.username}} </h1>
                <h3> {{ PublishDate || homePost.PublishDate}} </h3>
            </div>
        </div>
        <p :class="CategoryClass"> {{ InitialPost ? InitialPost.Category.toUpperCase() : homePost.Category.toUpperCase()}} </p>
    </div>
</template>

<script>
// import { computed } from '../../../../node_modules/vue/dist/vue'

import ProfileCircle from '../../ProfileCircle.vue'

export default {
    name: "CardHeader",
    components: {
        ProfileCircle
    },
    props: {
        homePost: Object,
        ContainerMode: Boolean,
        InitialPost: Object,
    },
    computed: {
        username(){
            return this.$store.state.user.Username
        },
        user2(){
            return this.$store.state.user2 || {}
        },
        HeaderClass(){
            return `CardHeader ${this.ContainerMode}`
        },
        CategoryClass(){
            return `Category ${this.ContainerMode}`
        },
        PublishDate() {
            this.InitialPost;
            let date = this.InitialPost.PublishDate.slice(0,10)
            let clock = this.InitialPost.PublishDate.slice(11,16)
            return `${date} - ${clock}`
        }

    },
    // setup(props) {
    //     computed(props.InitialPost.PublishDate, )
    // }
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