import { createApp, provide, h } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './index.css'
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink} from '@apollo/client'
import {DefaultApolloClient} from '@vue/apollo-composable'

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

  

// const getHeaders = () => {
//     const headers = {};
//      const token = window.localStorage.getItem('token');
//      if (token) {
//        headers.authorization = `Bearer ${token}`;
//      }
//      return headers;
//    };
   // Create an http link:
//    const link = new HttpLink({
//      uri: 'http://127.0.0.1:8000/graphql',
//      fetch,
//      headers: getHeaders()
//    });

   const httpLink = new HttpLink({
     uri: 'https://bluebackend.herokuapp.com/graphql',
   });


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
