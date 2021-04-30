<template>
    <div class="LoginPage">
        <div class="LoginCard">
            <p> BLUE </p>
            <form method="POST"  action="http://127.0.0.1:8000/graphql">
                <div>
                    <label v-if="username != ''" for="usernameInput" > Username </label>
                    <input type="text" id="usernameInput" name="usernameInput" placeholder="username" v-model="username"/>
                </div>
                <div>
                    <label v-if="password != ''" for="passwordInput" > Password </label>
                    <input type="text" id="passwordInput" name="passwordInput" placeholder="password" v-model="password"/>
                </div>
                <input type="submit" value="Log In"/>
            </form>
        </div>
    </div>
</template>

<script>
// const axios = require('axios');

export default {
    name: "LoginPage",
    data(){
        return {
            username: "",
            password: ""
        }
    },
methods: {
        // LoginFunc(e){
        //     query = {query: {
        //             tokenAuth(username: this.username, password: this.password)
        //         }
        //     }
            
        //     e.preventDefault();
        // }
    }
 
}
</script>

<style scoped>
.LoginPage {
    @apply w-full h-full grid grid-cols-2 items-center justify-items-center;
}

.LoginCard {
    @apply col-start-2 col-end-3 w-112 h-144 rounded-3xl border-gray-300 bg-gray-50 border-4 flex  flex-col items-center justify-between;
}

.LoginCard form {
    @apply flex flex-col items-center justify-evenly h-full;
}

.LoginCard div {
    @apply flex flex-col items-center;
}

.LoginCard input[type=text], input[type=password]  {
    @apply border-b-4 border-gray-300 text-xl;
}

.LoginCard input[type=text]:focus-within , input[type=password]:focus-within {
    @apply text-blue-400 border-blue-400;
}

.LoginCard input[type=text]:focus::placeholder, input[type=password]:focus::placeholder {
    @apply text-blue-400;
}

.LoginCard label {
    @apply self-start font-semibold text-gray-400;
}

.LoginCard input[type=submit] {
    @apply p-4 w-full text-2xl bg-blue-400 text-white rounded-xl transition;
}

.LoginCard input[type=submit]:hover {
    @apply bg-blue-500;
}
</style>