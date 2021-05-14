<template>
    <div class="LoginPage">
        <div class="LoginCard">
            <p class="blue"> BLUE </p>
            <form method="POST"  @submit.prevent="Login">
                <p v-if="error"> Please check your credentials! </p>
                <div>
                    <label v-if="username != ''" for="usernameInput" > Username </label>
                    <input type="text" id="usernameInput" name="usernameInput" placeholder="username" v-model="username"/>
                </div>
                <div>
                    <label v-if="password != ''" for="passwordInput" > Password </label>
                    <input type="password" id="passwordInput" name="passwordInput" placeholder="password" v-model="password"/>
                </div>
                <input type="submit" value="Log In"/>
            </form>
            <p @click="signup" class="signup"> Sign Up! </p>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'
import {useMutation} from '@vue/apollo-composable'
import loginMutation from '@/graphql/login.mutation.gql'
// import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
import { useRouter } from 'vue-router'

export default {
    name: "LoginPage",
    setup() {
        console.log("selaaama")
        const username = ref('')
        const password = ref('')
        const error = ref(false)
        const store = useStore()
        const router = useRouter()
        const getUser =async (user) =>await store.dispatch('getUser',user)
        // const router = useRouter()
        const {mutate: Login, loading, onDone} = useMutation(loginMutation, () => ({
            variables: {
                username: username.value,
                password: password.value
            }
        }))

        onDone(function(result) {
            const success = result.data.tokenAuth.success
            const token = result.data.tokenAuth.token;
            localStorage.setItem("token", token);
            if (success) {
                const user = result.data.tokenAuth.user
                getUser(user)
                location.reload() 
                }
            else {error.value = true}
        })
        
        const signup = () => {
            router.push('/signup')
        }

        return {username, password, Login, error,loading,signup}
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

.signup {
    @apply text-gray-400 font-bold text-lg pb-8 transition cursor-pointer;
}

.blue {
    @apply text-gray-400 font-bold text-lg pt-8 transition cursor-default;
}

.signup:hover {
    @apply text-gray-500;
}

.blue:hover {
    @apply text-blue-400;
}
</style>