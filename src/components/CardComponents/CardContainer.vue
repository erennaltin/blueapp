<template>
    <div :class="ContainerClass">
        <p v-if="ContainerMode" @click="changeContainerMode" class="CloseDetail"> X Close Detail </p>
        <div :class="PostClassifier">
            <CardHeader :ContainerMode="ContainerMode" :homePost="homePost" class="Head"/>
            <CardPost :ContainerMode="ContainerMode" :changeContainerMode="changeContainerMode" :homePost="homePost" class="Post" />
            <CardTags v-if="!ContainerMode" :ContainerMode="ContainerMode" :homePost="homePost" />
        </div>
        <CardObjection v-if="ContainerMode" :homePost="homePost" />
        <CardComment v-if="ContainerMode" :homePost="homePost" />
    </div>
</template>

<script>
import CardComment from './CardComment.vue'
import CardHeader from './CardHeader.vue'
import CardObjection from './CardObjection.vue'
import CardPost from './CardPost.vue'
import CardTags from './CardTags.vue'

export default {
    name:"CardContainer",
    components: { 
        CardHeader,
        CardTags,
        CardPost,
        CardComment,
        CardObjection
        },
    computed: {
        homePost(){
            return this.$store.state.homePost
        },
        ContainerClass(){
            return `CardContainer ${this.ContainerMode}`
        },
    },
    data(){
        return {
        ContainerMode: false,
        PostClassifier: "Vertical"
        }
    },
    methods: {
        changeContainerMode(){
        this.ContainerMode = !this.ContainerMode
        if(this.PostClassifier === "Vertical"){
            this.PostClassifier = "Horizental";
        }
        else {
            this.PostClassifier = "Vertical";
        }
        }
    },
}
</script>

<style scoped>
.CardContainer {
    height: 750px;
    @apply bg-gray-50 
    border-gray-300
    border-4
    flex;
    border-radius: 2rem;
}

.false {
    max-width: 550px;
    min-width: 360px;
    
}

.true {
    width: 1400px;
}

.Horizental {
    @apply flex mt-14 border-r-4 pb-8 ;
    width: 700px;
    -webkit-mask-image: linear-gradient(to bottom, black 90%, transparent 100%);
    mask-image: linear-gradient(to bottom, black 90%, transparent 100%);
}

.Head {
    @apply mr-6;
    order:1;
}

.CloseDetail {
    @apply absolute h-14 flex justify-center items-center 
    border-r-4 border-b-4
    text-xl text-red-500
    font-bold
    whitespace-nowrap;
    width: 700px;
}
</style>