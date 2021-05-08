<template>
    <div class="Check">
      
    </div>
</template>

<script>
import {watch} from 'vue'
import {useQuery, useResult} from '@vue/apollo-composable'
import checkUserQuery from '@/graphql/checkUser.query.gql'
import { useRouter} from 'vue-router'

export default {
    name: "index",
    setup() {
        const router = useRouter()

        const {result, loading} = useQuery(checkUserQuery)
        const user = useResult(result, null, data => data.me)

        watch(loading, (newValue) => {
            if(!newValue && user.value === null) {
                router.push('login')
            }
            else {
                // const {result: userInfos} = useQuery()
                router.push('home')
            }
        })
        
    }    
}
</script>

<style scoped>

</style>