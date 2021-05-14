<template>
    <div class="addComment">
        <input type="text" maxlength="50" v-model="newComment" placeholder="You had a great point!" />
        <button type="submit"> <SendComment /> </button> 
    </div>
</template>

<script>
import SendComment from "@/assets/Icons/SendComment.svg"

export default {
    name:"CommentBar",
    components: {
        SendComment,
    },
    data(){
        return {
            newComment: ""
        }
    }        
}
</script>

<style scoped>

.addComment {
    @apply h-14
    border-4 rounded-xl
    flex w-full mr-4 ml-2 items-center justify-between;
    z-index: 1;
}

input {
    @apply bg-gray-50 ml-4 mr-2 w-full ;
}

input:focus {
    @apply outline-none;
}

</style>