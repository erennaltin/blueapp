import { createApp, provide, h } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './index.css'
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink} from '@apollo/client'
// import { createUploadLink } from 'apollo-upload-client'
import {DefaultApolloClient } from '@vue/apollo-composable'
// import { RetryLink } from '@apollo/client/link/retry';



const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    const token = localStorage.getItem("token")
    operation.setContext({
      headers: {
        authorization: token ? `JWT ${token}` : null
      }
    })
  
    return forward(operation)
  })

const httpLink = new HttpLink({
 //  uri: 'https://bluebackend.herokuapp.com/graphql',
 uri: 'https://bluebackend.herokuapp.com/graphql'
});


// const links = new RetryLink().split(
//  operation => operation.getContext().hasUpload,
//  createUploadLink({
//    // uri: 'https://bluebackend.herokuapp.com/graphql',
//    uri: 'http://127.0.0.1:8000/graphql'

//  }),
//  httpLink
// )
const defaultClient = new ApolloClient({
    link: authMiddleware.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true,
    defaultOptions: {
      $query: {
        fetchPolicy: 'network-only'
      },
    }
})


export default defaultClient;


createApp({
    setup(){
        provide(DefaultApolloClient, defaultClient)
    },
    render(){
        return h(App)
    }

}).use(store).use(router).mount('#app')
