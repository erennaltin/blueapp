<template>
    <div class="ControlPanel">
        <h1> BLUE </h1>
        <ul>
            <li><router-link to="/Home"> Home </router-link></li>
            <li><router-link to="/profile"> Profile </router-link></li>
            <li><router-link to="#"> Top </router-link></li>
            <li><router-link to="Create"> Make a statement </router-link></li>
        
        </ul>
    </div>
</template>

<script>
export default {
    name: "Navigation"        

    }
</script>

<style scoped>
.ControlPanel {
    @apply text-white
    flex
    h-14 w-full
    items-center
    justify-evenly mb-6;
}

.ControlPanel ul {
    @apply flex
    ml-2
    justify-self-end;
}

.ControlPanel ul li {
    @apply ml-8
    text-xl
    font-semibold;
}

h1 {
    @apply text-3xl
    font-bold;
}
</style>