<template>
    <div class="Comment">
        <profile-circle size="sm"/>
        <div class="Container">
            <p> {{fragment.Text}} </p>
            <div v-if="title === 'Objections'" class="Informations"> 
                <p> {{fragment.Owner}} </p>
                <p> {{fragment.PublishDate}} </p>
            </div>
            <div v-if="title === 'Comments'" class="Informations"> 
                <p> {{fragment.user.username}} </p>
                <p> {{PublishDate}} </p>
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
        title: String,
    }, 
    computed: {
         PublishDate() {
            let date = this.fragment.Time.slice(0,10)
            let clock = this.fragment.Time.slice(11,16)
            return `${date} - ${clock} UTC`
        }
    }
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