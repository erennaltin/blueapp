<template>
    <div class="CardObjection">
        <h1> Objections </h1>
        <div class="SectionContainer">
            <div class="Comments">
                <Comment v-for="ObjectionPart in Objections" :key="ObjectionPart.uuid" :objection="ObjectionPart" /> 
            </div>
            <div class="addObjection">
                <button type="submit"> Make an Objection </button> 
            </div>
        </div>
    </div>
</template>

<script>
import Comment from "./Comment.vue";

export default {
    name:"CardObjection",
    components: {
        Comment
    },
    data(){
        return {
            Objections: [{
                uuid: "f1cd7ff5-489f-4957-8186-41fec0f65fca",
                Owner: "slmbnobjection",
                Title: "Police Department has degenerated!",
                PublishDate: "21.04.2021 - 16:21"
                },
                {
                uuid: "f1cd7ff5-489f-4957-8186-41fec0f65fca",
                Owner: "slmbnobjection",
                Title: "Police Department has degenerated!",
                PublishDate: "21.04.2021 - 16:21"
                },
                {
                uuid: "f1cd7ff5-489f-4957-8186-41fec0f65fca",
                Owner: "slmbnobjection",
                Title: "Police Department has degenerated!",
                PublishDate: "21.04.2021 - 16:21"
                },
                {
                uuid: "f1cd7ff5-489f-4957-8186-41fec0f65fca",
                Owner: "slmbnobjection",
                Title: "Police Department has degenerated!",
                PublishDate: "21.04.2021 - 16:21"
                },
                {
                uuid: "f1cd7ff5-489f-4957-8186-41fec0f65fca",
                Owner: "slmbnobjection",
                Title: "Police Department has degenerated!",
                PublishDate: "21.04.2021 - 16:21"
                },
                {
                uuid: "f1cd7ff5-489f-4957-8186-41fec0f65fca",
                Owner: "slmbnobjection",
                Title: "Police Department has degenerated!",
                PublishDate: "21.04.2021 - 16:21"
                },
                {
                uuid: "f1cd7ff5-489f-4957-8186-41fec0f65fca",
                Owner: "slmbnobjection",
                Title: "Police Department has degenerated!",
                PublishDate: "21.04.2021 - 16:21"
                },
                {
                uuid: "f1cd7ff5-489f-4957-8186-41fec0f65fca",
                Owner: "slmbnobjection",
                Title: "Police Department has degenerated!",
                PublishDate: "21.04.2021 - 16:21"
                },
                {
                uuid: "f1cd7ff5-489f-4957-8186-41fec0f65fca",
                Owner: "slmbnobjection",
                Title: "Police Department has degenerated!",
                PublishDate: "21.04.2021 - 16:21"
                },
                {
                uuid: "f1cd7ff5-489f-4957-8186-41fec0f65fca",
                Owner: "slmbnobjection",
                Title: "Police Department has degenerated!",
                PublishDate: "21.04.2021 - 16:21"
                },
                {
                uuid: "f1cd7ff5-489f-4957-8186-41fec0f65fca",
                Owner: "slmbnobjection",
                Title: "Police Department has degenerated!",
                PublishDate: "21.04.2021 - 16:21"
                },
                {
                uuid: "f1cd7ff5-489f-4957-8186-41fec0f65fca",
                Owner: "slmbnobjection",
                Title: "Police Department has degenerated!",
                PublishDate: "21.04.2021 - 16:21"
                },
                {
                uuid: "f1cd7ff5-489f-4957-8186-41fec0f65fca",
                Owner: "slmbnobjection",
                Title: "Police Department has degenerated!",
                PublishDate: "21.04.2021 - 16:21"
                },
                {
                uuid: "f1cd7ff5-489f-4957-8186-41fec0f65fca",
                Owner: "slmbnobjection",
                Title: "Police Department has degenerated!",
                PublishDate: "21.04.2021 - 16:21"
                },
                {
                uuid: "f1cd7ff5-489f-4957-8186-41fec0f65fca",
                Owner: "slmbnobjection",
                Title: "Police Department has degenerated!",
                PublishDate: "21.04.2021 - 16:21"
                },
                {
                uuid: "f1cd7ff5-489f-4957-8186-41fec0f65fca",
                Owner: "slmbnobjection",
                Title: "Police Department has degenerated!",
                PublishDate: "21.04.2021 - 16:21"
                }]
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

.addObjection {
    @apply h-20    
     rounded-xl
    flex items-center justify-center m-4 ml-2
    text-lg 
    bg-blue-400
    ;
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
</style>
