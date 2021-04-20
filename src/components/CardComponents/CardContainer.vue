<template>
    <div :class="ContainerClass">
        <div :class="PostClassifier">
            <CardHeader :ContainerMode="ContainerMode" :homePost="homePost" class="Head"/>
            <CardPost :ContainerMode="ContainerMode" :changeContainerMode="changeContainerMode" :homePost="homePost" class="Post" />
            <CardTags v-if="!ContainerMode" :ContainerMode="ContainerMode" :homePost="homePost" />
        </div>
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
    @apply bg-gray-100 
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
    @apply flex mt-14 border-t-4 border-r-4;
    width: 700px;
}

.Head {
    order:1;
}
</style>