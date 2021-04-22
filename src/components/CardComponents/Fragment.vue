<template>
    <div class="Comment">
        <profile-circle />
        <div class="Container">
            <p> {{fragment.Text}} </p>
            <div class="Informations"> 
                <p> {{fragment.Owner}} </p>
                <p> {{fragment.PublishDate}} </p>
            </div>
        </div>
    </div>
</template>

<script>
import ProfileCircle from '../ProfileCircle.vue'
export default {
    name:"Fragment",
    components: {
        ProfileCircle
    },
    props: {
        fragment: Object,
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
    text-xs font-semibold opacity-40;
}

.Container p {
    @apply ml-2;
    
}

</style>