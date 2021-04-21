<template>
    <div class="Comment">
        <profile-circle />
        <div v-if="comment != undefined" class="Container">
            <p> {{comment.Comment}} </p>
            <div class="Informations"> 
                <p> {{comment.Owner}} </p>
                <p> {{comment.PublishDate}} </p>
            </div>
        </div>
        <div v-else-if="objection != undefined" class="Container">
            <p> {{objection.Title}} </p>
            <div class="Informations"> 
                <p> {{objection.Owner}} </p>
                <p> {{objection.PublishDate}} </p>
            </div>
        </div>

    </div>
</template>

<script>
import ProfileCircle from '../ProfileCircle.vue'
export default {
    name:"Comment",
    components: {
        ProfileCircle
    },
    props: {
        CommentType: {
            type: String,
            default: "Comment"
        },
        comment: Object,
        objection: Object,
    }, 
}
</script>

<style scoped>
.Comment {
    @apply flex mt-4 ml-2;
}

.Container {
    @apply w-72 ml-4 flex-col items-center
    border-4 rounded-xl ;
}

.Container .Informations {
    @apply flex justify-between items-center pr-2 mt-2 
    bg-gray-200 
    text-xs font-semibold opacity-40
}

.Container p {
    @apply ml-2
    
}

</style>