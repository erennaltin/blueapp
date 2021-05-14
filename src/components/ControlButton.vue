<template>
    <div :class="ButtonClass">
        <component :is="Component" class="Image"/>
    </div>
</template>

<script>
import Approve from '@/assets/Icons/Approve.svg';
import Decline from '@/assets/Icons/Decline.svg';
import Objection from '@/assets/Icons/Objection.svg';
import Comment from '@/assets/Icons/Comment.svg';



export default {
    name: "ControlButton",
    components: {
        Approve,
        Decline,
        Objection,
        Comment
    },
    props: {
        Component: {
            type: String,
            default: "Approve"
        }
    },
    computed: {
        ButtonClass(){
            return `ControlButton ${this.Component}`
        }
    }
}
</script>

<style scoped>
.ControlButton {
    @apply w-20 h-20 rounded-full
    flex justify-center items-center
    cursor-pointer;
}

.Image {
    @apply h-10;
}

.Approve {
    @apply bg-green-300;
}

.Decline {
    @apply bg-red-300;
}

.Objection {
    @apply bg-yellow-200;
}

.Comment {
    @apply bg-yellow-500;
}

</style>