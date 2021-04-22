<template>
    <div :class="ContainerClass">
        <HomeContainer :ContainerMode="ContainerMode" :changeContainerMode="changeContainerMode"/>
    </div>
</template>

<script>

import HomeContainer from './HomeContainer.vue'

export default {
    name:"CardContainer",
    components: { 
        HomeContainer
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