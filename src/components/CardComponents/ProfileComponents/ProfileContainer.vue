<template>
    <div class="ProfileContainer">
        <ProfileSection />
        <SectionContainer title="Objections" :information="Comments" />
        <SectionContainer title="Supported Statements" :information="Comments" isLast="last"/>
    </div>
</template>

<script>
import SectionContainer from '../SectionContainer.vue'
import ProfileSection from './ProfileSection.vue'
export default {
    name: "ProfileContainer",        
    components: {
        ProfileSection,
        SectionContainer
        },
    data(){
        return {
            Comments: [{
                uuid: "ec939b54-5eba-4be0-b0a9-43519a733450",
                Owner: "krdnzli61",
                PublishDate: "21.04.2021 - 20:04",
                Text: "This is a comment!",
                Belong: "e046fbe0-a294-11eb-ba6c-59c7298c9eef",
            },
            {
                uuid: "ec939b54-5eba-4be0-b0a9-43519a733450",
                Owner: "krdnzli61",
                PublishDate: "21.04.2021 - 20:04",
                Text: "This is a comment!",
                Belong: "e046fbe0-a294-11eb-ba6c-59c7298c9eef",
            },{
                uuid: "ec939b54-5eba-4be0-b0a9-43519a733450",
                Owner: "krdnzli61",
                PublishDate: "21.04.2021 - 20:04",
                Text: "This is a comment!",
                Belong: "e046fbe0-a294-11eb-ba6c-59c7298c9eef",
            },{
                uuid: "ec939b54-5eba-4be0-b0a9-43519a733450",
                Owner: "krdnzli61",
                PublishDate: "21.04.2021 - 20:04",
                Text: "This is a comment!",
                Belong: "e046fbe0-a294-11eb-ba6c-59c7298c9eef",
            },{
                uuid: "ec939b54-5eba-4be0-b0a9-43519a733450",
                Owner: "krdnzli61",
                PublishDate: "21.04.2021 - 20:04",
                Text: "This is a comment!",
                Belong: "e046fbe0-a294-11eb-ba6c-59c7298c9eef",
            },{
                uuid: "ec939b54-5eba-4be0-b0a9-43519a733450",
                Owner: "krdnzli61",
                PublishDate: "21.04.2021 - 20:04",
                Text: "This is a comment!",
                Belong: "e046fbe0-a294-11eb-ba6c-59c7298c9eef",
            },{
                uuid: "ec939b54-5eba-4be0-b0a9-43519a733450",
                Owner: "krdnzli61",
                PublishDate: "21.04.2021 - 20:04",
                Text: "This is a comment!",
                Belong: "e046fbe0-a294-11eb-ba6c-59c7298c9eef",
            },{
                uuid: "ec939b54-5eba-4be0-b0a9-43519a733450",
                Owner: "krdnzli61",
                PublishDate: "21.04.2021 - 20:04",
                Text: "This is a comment!",
                Belong: "e046fbe0-a294-11eb-ba6c-59c7298c9eef",
            },{
                uuid: "ec939b54-5eba-4be0-b0a9-43519a733450",
                Owner: "krdnzli61",
                PublishDate: "21.04.2021 - 20:04",
                Text: "This is a comment!",
                Belong: "e046fbe0-a294-11eb-ba6c-59c7298c9eef",
            },{
                uuid: "ec939b54-5eba-4be0-b0a9-43519a733450",
                Owner: "krdnzli61",
                PublishDate: "21.04.2021 - 20:04",
                Text: "This is a comment!",
                Belong: "e046fbe0-a294-11eb-ba6c-59c7298c9eef",
            },{
                uuid: "ec939b54-5eba-4be0-b0a9-43519a733450",
                Owner: "krdnzli61",
                PublishDate: "21.04.2021 - 20:04",
                Text: "This is a comment!",
                Belong: "e046fbe0-a294-11eb-ba6c-59c7298c9eef",
            },{
                uuid: "ec939b54-5eba-4be0-b0a9-43519a733450",
                Owner: "krdnzli61",
                PublishDate: "21.04.2021 - 20:04",
                Text: "This is a comment!",
                Belong: "e046fbe0-a294-11eb-ba6c-59c7298c9eef",
            },{
                uuid: "ec939b54-5eba-4be0-b0a9-43519a733450",
                Owner: "krdnzli61",
                PublishDate: "21.04.2021 - 20:04",
                Text: "This is a comment!",
                Belong: "e046fbe0-a294-11eb-ba6c-59c7298c9eef",
            },{
                uuid: "ec939b54-5eba-4be0-b0a9-43519a733450",
                Owner: "krdnzli61",
                PublishDate: "21.04.2021 - 20:04",
                Text: "This is a comment!",
                Belong: "e046fbe0-a294-11eb-ba6c-59c7298c9eef",
            },]
        }
    }
}
</script>

<style scoped>
.ProfileContainer {
    @apply flex;
    border-radius: 2rem;
}

</style>