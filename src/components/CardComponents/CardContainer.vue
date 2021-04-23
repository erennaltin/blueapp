<template>
    <div :class="ContainerClass">
        <slot />
    </div>
</template>

<script>


export default {
    name:"CardContainer",
    props:{
            ContainerMode: Boolean
        },
    computed: {
        ContainerClass(){
            return `CardContainer ${this.ContainerMode}`
        },
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


</style>