<template>
    <div :class="ContainerClass">
        <p v-if="ContainerMode" @click="changeContainerMode" class="CloseDetail"> X Close Detail </p>
        <div :class="PostClassifier">
            <CardHeader :ContainerMode="ContainerMode" :InitialPost="InitialPost" :homePost="homePost" class="Head"/>
            <CardPost :ContainerMode="ContainerMode" :InitialPost="InitialPost" :changeContainerMode="changeContainerMode" :homePost="homePost" class="Post" />
            <CardTags v-if="!ContainerMode" :ContainerMode="ContainerMode" :InitialPost="InitialPost" :homePost="homePost" />
        </div>
        <SectionContainer v-if="ContainerMode" title="Objections" :information="Objections" > <MakeObjectionButton /> </SectionContainer>
        <SectionContainer v-if="ContainerMode" title="Comments" :information="Comments" isLast="last"> <CommentBar /> </SectionContainer>
    </div>
</template>

<script>
import CardHeader from './CardHeader.vue'
import CardPost from './CardPost.vue'
import CardTags from './CardTags.vue'
import SectionContainer from '../SectionContainer.vue'
import MakeObjectionButton from './MakeObjectionButton.vue'
import CommentBar from './CommentBar.vue'



export default {
    name:"CardContainer",
    components: { 
        CardHeader,
        CardTags,
        CardPost,
        SectionContainer,
        MakeObjectionButton,
        CommentBar
    },
    props: {
        changeContainerMode: Function,
        ContainerMode: Boolean,
    },
    computed: {
        homePost(){
            return this.$store.state.homePost
        },
        InitialPost(){
            return this.$store.state.InitialPost
        },
        ContainerClass(){
            return `HomeContainer ${this.ContainerMode}`
        },
    },
    data(){
        return {
        PostClassifier: "Vertical",
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
            },
            {
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
            },
            {
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
            },
            {
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
            },
            {
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
            }],
            Objections: [{
                uuid: "f1cd7ff5-489f-4957-8186-41fec0f65fca",
                Owner: "slmbnobjection",
                Text: "Police Department has degenerated!",
                PublishDate: "21.04.2021 - 16:21"
                },
                {
                uuid: "f1cd7ff5-489f-4957-8186-41fec0f65fca",
                Owner: "slmbnobjection",
                Text: "Police Department has degenerated!",
                PublishDate: "21.04.2021 - 16:21"
                },
                {
                uuid: "f1cd7ff5-489f-4957-8186-41fec0f65fca",
                Owner: "slmbnobjection",
                Text: "Police Department has degenerated!",
                PublishDate: "21.04.2021 - 16:21"
                },
                {
                uuid: "f1cd7ff5-489f-4957-8186-41fec0f65fca",
                Owner: "slmbnobjection",
                Text: "Police Department has degenerated!",
                PublishDate: "21.04.2021 - 16:21"
                },
                {
                uuid: "f1cd7ff5-489f-4957-8186-41fec0f65fca",
                Owner: "slmbnobjection",
                Text: "Police Department has degenerated!",
                PublishDate: "21.04.2021 - 16:21"
                },
                {
                uuid: "f1cd7ff5-489f-4957-8186-41fec0f65fca",
                Owner: "slmbnobjection",
                Text: "Police Department has degenerated!",
                PublishDate: "21.04.2021 - 16:21"
                },
                {
                uuid: "f1cd7ff5-489f-4957-8186-41fec0f65fca",
                Owner: "slmbnobjection",
                Text: "Police Department has degenerated!",
                PublishDate: "21.04.2021 - 16:21"
                },
                {
                uuid: "f1cd7ff5-489f-4957-8186-41fec0f65fca",
                Owner: "slmbnobjection",
                Text: "Police Department has degenerated!",
                PublishDate: "21.04.2021 - 16:21"
                },]
        }
    },
    watch: {
        ContainerMode: function(val) {
            if(val){
                this.PostClassifier = "Horizental"
            }
            else {
                this.PostClassifier = "Vertical"
            }
        }
    }
}
</script>

<style scoped>
.HomeContainer {
    height: 750px;
    @apply flex;
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