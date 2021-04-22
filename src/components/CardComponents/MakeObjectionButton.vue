<template>
    <div class="ObjectionButton">
        <button type="submit"> Make an Objection </button> 
    </div>
</template>

<script>
export default {
    name: "MakeObjectionButton",

    }
</script>

<style scoped>
.ObjectionButton {
    @apply w-full mr-4 ml-2;
}

button {
    @apply bg-blue-400 h-14 rounded-xl 
    text-lg w-full font-semibold text-white;
}
</style>