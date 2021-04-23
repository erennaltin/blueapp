<template>
    <div :class="className">
        <img :src="source">
    </div>
</template>

<script>
export default {
    name: "ProfileCircle",
    props: {
        size: {
            type: String,
            default: "sm"
        }
    },
    computed: {
        className: function(){
            return `circle ${this.size}`
        },
        source(){
            return this.$store.state.user.profilePicture;
        }
    }    
    }
</script>

<style scoped>
.circle {
    @apply border-2 border-gray-300 rounded-full;
}

.circle img {
    @apply rounded-full;
}

.sm {
    @apply w-10 h-10;
}

.xl {
    @apply w-24 h-24
}

</style>