<template>
    <div class="StatementFragment">
        <div class="Review">
            <img src="https://random.imagecdn.app/400/300">
            <h1> Benim ismim name! </h1>
        </div>
    <div class="informations">
        <div class="informationFragment">
            <h1> 50 </h1>
            <p> Approvals </p>
        </div>
        <div class="informationFragment">
            <h1> 50 </h1>
            <p> Declines </p>
        </div>
        <div class="informationFragment">
            <h1> 50 </h1>
            <p> Objections </p>
        </div>
        <div class="informationFragment">
            <h1> 50 </h1>
            <p> Comments </p>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: "StatementFragment",
}
</script>

<style scoped>

.StatementFragment {
    @apply  h-64 w-144 bg-gray-100 mt-4 ml-4
    flex
    border-4 rounded-3xl text-gray-400;
}

.Review {
    @apply ml-2 h-full;
}

img {
    @apply h-52 w-96 rounded-l-xl mt-2;
}

h1 {
    @apply text-gray-500 font-bold text-lg mr-2; 
}

.informations {
    @apply ml-4 flex flex-col justify-evenly h-52 mt-2 font-semibold;
}

.informationFragment {
    @apply flex items-center;
}
</style>