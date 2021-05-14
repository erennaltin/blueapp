<template>
    <div class="BottomLine">
        <ul class="Tags">
            <li v-for="tag in tagArray" :key="tag"> {{`#${tag}`}} </li>
        </ul>
        <Settings class="Settings"/>
    </div>
</template>

<script>
import Settings from '@/assets/Icons/Settings.svg'


export default {
    name:"CardTags",
    components: {
        Settings
    },
    props: {
        homePost: Object,
        InitialPost: Object,
    },
    data(){
        return {
            tagArray: [],
        }
    },
    
    beforeMount(){
        this.tagArray = [...this.InitialPost.Tags.split(",")] || [...this.homePost.Tags.split(",")]
    },
    watch: {
        InitialPost() {
            this.tagArray =  [...this.InitialPost.Tags.split(",")]
        }
    }
}
</script>

<style scoped>
.BottomLine {
    @apply h-14 w-full
    border-gray-200 border-t-4
    grid
    grid-cols-4
    items-center;
}

.Tags {
    @apply flex
    ml-2;
}

.Tags li {
    @apply ml-2
    font-semibold
    text-lg;
}

.Settings {
    @apply w-8
    col-start-4
    justify-self-end
    mr-4
}
</style>