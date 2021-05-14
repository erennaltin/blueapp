<template>
    <div class="addComment">
        <input type="text" maxlength="50" v-model="newComment" placeholder="You had a great point!" />
        <button @click="addComment" type="submit"> <SendComment /> </button> 
    </div>
</template>

<script>
import SendComment from "@/assets/Icons/SendComment.svg"
import { ref } from 'vue'
import { useMutation } from '@vue/apollo-composable'
import addCommentsMutation from '@/graphql/addComments.mutation.gql'
import { useStore } from 'vuex'


export default {
    name:"CommentBar",
    components: {
        SendComment,
    },
    setup() {
        const newComment = ref('')
        const store = useStore()
        const user = store.state.user2
        const post = store.state.InitialPost


        const {mutate:addComment, onDone} = useMutation(addCommentsMutation, () => ({
            variables: {
                postUuid: post.uuid,
                username: user.username,
                Text: newComment.value
            }
        }))

        onDone((result) => {
            console.log(result)
        })

        return {newComment, addComment}
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