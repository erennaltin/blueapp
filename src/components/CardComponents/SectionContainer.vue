<template>
    <div :class="sectionClass">
        <h1> {{title}} </h1>
        <div class="SectionContainer">
            <div class="Comments">
                <Comment v-for="fragment in information" :key="fragment.uuid" :fragment="fragment" /> 
            </div>
            <div class="ButtonSlot">
                <slot/>
            </div>
        </div>
    </div>
</template>

<script>
import Comment from "./Fragment.vue";

export default {
    name:"CardObjection",
    components: {
        Comment
    },
    props: {
        title: {
            type: String,
            default: "Title"
        },
        information: Array,
        isLast: {
            type: String,
            default: ""
        }
    },
    computed:{
        sectionClass(){
            return `MainSectionContainer ${this.isLast}`
        }
    }
}
</script>

<style scoped>
.MainSectionContainer {
    width: 350px;
    @apply mb-2 border-r-4;
}

h1 {
    @apply h-14 flex items-center justify-center
    font-bold
    text-xl
    border-b-4; 
}

.SectionContainer {
    @apply flex flex-col h-full justify-between pb-14 ;
}

.ButtonSlot {
    @apply h-14
    flex items-center w-full justify-center mb-6 mt-2;
    z-index: 1;
}

button {
    @apply font-semibold
    text-white;
}

button:focus {
    @apply outline-none;
}

.Comments {
    @apply overflow-y-scroll;
}


input {
    @apply bg-gray-50 ml-4 mr-2 w-full ;
}

input:focus {
    @apply outline-none;
}

.last {
    @apply border-r-0 mr-2
}
</style>
