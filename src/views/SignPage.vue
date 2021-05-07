<template>
    <div>
        <div v-for="post in posts" :key="post.uuid">
            <h1> {{post.Title}} </h1>
            <p> {{post.Text}} </p>
        </div>
    </div>
</template>

<script>
import {useQuery, useResult} from '@vue/apollo-composable';
import getRandomPostQuery from '../graphql/getRandomPost.query.gql'

export default {
    setup () {
        const {result} = useQuery(getRandomPostQuery)
        const posts = useResult(result, null, data => data.posts)


        return  {posts}
    }
}
</script>

<style lang="scss" scoped>

</style>