import { createApp, provide, h } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './index.css'
import { ApolloClient, InMemoryCache} from '@apollo/client'
import {DefaultApolloClient} from '@vue/apollo-composable'

const defaultClient = new ApolloClient({
    uri: "http://127.0.0.1:8000/graphql",
    cache: new InMemoryCache()
})



createApp({
    setup(){
        provide(DefaultApolloClient, defaultClient)
    },
    render(){
        return h(App)
    }

}).use(store).use(router).mount('#app')
