<template>
    <div class="CardComment">
        <h1> Comments </h1>
        <div class="SectionContainer">
            <div class="Comments">
                <Comment v-for="CommentPart in Comments" :key="CommentPart.uuid" :comment="CommentPart" /> 
            </div>
            <div class="addComment">
                <input type="text" v-model="newComment" placeholder="You had a great point!" />
                <button type="submit"> <SendComment /> </button> 
            </div>
        </div>
    </div>
</template>

<script>
import Comment from "./Comment.vue";
import SendComment from "@/assets/Icons/SendComment.svg"

export default {
    components: { 
        Comment,
        SendComment
        },
    name:"CardComment",
    data(){
        return {
            Comments: [{
                uuid: "ec939b54-5eba-4be0-b0a9-43519a733450",
                Owner: "krdnzli61",
                PublishDate: "21.04.2021 - 20:04",
                Comment: "This is a comment!",
                Belong: "e046fbe0-a294-11eb-ba6c-59c7298c9eef"

            },{
                uuid: "1661fbad-01ac-483f-9406-79904f0ce8f7",
                Owner: "sbncuniv",
                PublishDate: "21.04.2021 - 20:04",
                Comment: "This is a comment2!",
                Belong: "e046fbe0-a294-11eb-ba6c-59c7298c9eef"

            },
            {
                uuid: "1661fbad-01ac-483f-9406-79904f0ce8f7",
                Owner: "sbncuniv",
                PublishDate: "21.04.2021 - 20:04",
                Comment: "This is a comment2!",
                Belong: "e046fbe0-a294-11eb-ba6c-59c7298c9eef"

            },
            {
                uuid: "1661fbad-01ac-483f-9406-79904f0ce8f7",
                Owner: "sbncuniv",
                PublishDate: "21.04.2021 - 20:04",
                Comment: "This is a comment2!",
                Belong: "e046fbe0-a294-11eb-ba6c-59c7298c9eef"

            },
            {
                uuid: "1661fbad-01ac-483f-9406-79904f0ce8f7",
                Owner: "sbncuniv",
                PublishDate: "21.04.2021 - 20:04",
                Comment: "This is a comment2!",
                Belong: "e046fbe0-a294-11eb-ba6c-59c7298c9eef"

            },
            {
                uuid: "1661fbad-01ac-483f-9406-79904f0ce8f7",
                Owner: "sbncuniv",
                PublishDate: "21.04.2021 - 20:04",
                Comment: "This is a comment2!",
                Belong: "e046fbe0-a294-11eb-ba6c-59c7298c9eef"

            },
            {
                uuid: "1661fbad-01ac-483f-9406-79904f0ce8f7",
                Owner: "sbncuniv",
                PublishDate: "21.04.2021 - 20:04",
                Comment: "This is a comment2!",
                Belong: "e046fbe0-a294-11eb-ba6c-59c7298c9eef"

            },
            {
                uuid: "1661fbad-01ac-483f-9406-79904f0ce8f7",
                Owner: "sbncuniv",
                PublishDate: "21.04.2021 - 20:04",
                Comment: "This is a comment2!",
                Belong: "e046fbe0-a294-11eb-ba6c-59c7298c9eef"

            },
            {
                uuid: "1661fbad-01ac-483f-9406-79904f0ce8f7",
                Owner: "sbncuniv",
                PublishDate: "21.04.2021 - 20:04",
                Comment: "This is a comment2!",
                Belong: "e046fbe0-a294-11eb-ba6c-59c7298c9eef"

            },
            {
                uuid: "1661fbad-01ac-483f-9406-79904f0ce8f7",
                Owner: "sbncuniv",
                PublishDate: "21.04.2021 - 20:04",
                Comment: "This is a comment2!",
                Belong: "e046fbe0-a294-11eb-ba6c-59c7298c9eef"

            },
            {
                uuid: "1661fbad-01ac-483f-9406-79904f0ce8f7",
                Owner: "sbncuniv",
                PublishDate: "21.04.2021 - 20:04",
                Comment: "This is a comment2!",
                Belong: "e046fbe0-a294-11eb-ba6c-59c7298c9eef"

            }],
            newComment: ""
        }
    }
}
</script>

<style scoped>
.CardComment {
    width: 350px;
}

h1 {
    @apply h-14 flex items-center justify-center
    font-bold
    text-xl
    border-b-4;
}

.SectionContainer {
    @apply flex flex-col justify-between h-full pb-14;
}

.addComment {
    @apply h-14
    border-4 rounded-xl
    flex items-center justify-between m-4 ml-2;
    z-index: 1;
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
</style>