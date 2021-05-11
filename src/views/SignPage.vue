<template>
    <div class="LoginPage">
        <div class="LoginCard">
            <p> BLUE </p>
            <p v-for="errorF in errors" :key="errorF"> {{ errorF }} </p>
            <!-- <p> {{errors.value[1].email[0]}} </p> -->
            <form method="POST"  @submit.prevent="Register">
                <div>
                    <label v-if="username != ''" for="usernameInput" > Username </label>
                    <input type="text" id="usernameInput" name="usernameInput" placeholder="username" v-model="username"/>
                </div>
                <div>
                    <label v-if="email != ''" for="emailInput" > Email </label>
                    <input type="text" id="emailInput" name="emailInput" placeholder="email" v-model="email"/>
                </div>
                <div>
                    <label v-if="password1 != ''" for="password1Input" > Password </label>
                    <input type="password" id="password1Input" name="password1Input" placeholder="password" v-model="password1"/>
                </div>
                <div>
                    <label v-if="password2 != ''" for="password2Input" > Password Again </label>
                    <input type="password" id="password2Input" name="password2Input" placeholder="password again" v-model="password2"/>
                </div>
                <input type="submit" value="Sign Up"/>
            </form>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'
import {useMutation, useQuery, useResult} from '@vue/apollo-composable'
import registerMutation from '@/graphql/register.mutation.gql'
import checkUserQuery from '@/graphql/checkUser.query.gql'
// import {useRouter} from 'vue-router'
import {useStore} from 'vuex'    

export default {
    name: "SignPage",
    setup() {
        const username = ref('')
        const password1 = ref('')
        const password2 = ref('')
        const email = ref('')
        const errors = ref('')
        const store = useStore()
        const getUser =async (user) =>await store.dispatch('getUser',user)
        // const router = useRouter()
        const {mutate: Register, loading, onDone} = useMutation(registerMutation, () => ({
            variables: {
                email: email.value,
                username: username.value,
                password1: password1.value,
                password2: password2.value,
            }
        }))

        const {result: LoginAttempt, refetch} = useQuery(checkUserQuery);
        const Login = useResult(LoginAttempt, store.state.user2, data => data.me)

        onDone(function(result) {
            const success = result.data.register.success
            if(success) {
                const token = result.data.register.token;
                localStorage.setItem("token", token);
                refetch()
                getUser(Login)
                location.reload()
            }
            else {
                errors.value = ''
                let errorsList = result.data.register.errors
                errorsList = Object.values(errorsList)
                errorsList.forEach(frag => {
                    errors.value += frag[0].message
                })
                errors.value = errors.value.split('.')
            }
        })

      
        // watch(loading, () => {
        // })

        return {username, password1, Register, errors,loading, password2, email, Login}
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