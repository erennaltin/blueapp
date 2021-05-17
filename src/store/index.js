import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      profilePicture: "",
      Username: "erennaltin"
    },
    user2: {username: "loading", photo: "userdefault.png"},
    homePost: {
      uuid: "Loading",
      PublishDate: "Loading",
      Title: "Loading",
      Text: "Loading",
      Photo: "https://bluebackend.herokuapp.com/media/default.png",
      Tags: "Loading",
      Category: "Loading"
    },
    InitialPost: {
      uuid: "Loading",
      PublishDate: "Loading",
      Title: "Loading",
      Text: "Loading",
      Photo: "default.png",
      Owner: {
        username: "loading",
        photo: "userdefault.png"
      },
      Tags: "Loading",
      Category: "Loading"
    },
    isAuth: false,
    initial: true,
    serverMedia: "https://bluebackend.herokuapp.com/media/",
    Mode: ''
  },
  mutations: {
    updateUser (state,payload) {
      state.user2 = payload
      state.isAuth = true
    },
    updatePost(state,payload) {
      state.InitialPost = payload
    },
    deleteCom(state,payload) {
      state.InitialPost.Comments.splice(payload.index, 1);
      console.log(state.InitialPost)
    },
    changeModeMutation(state, payload) {
      state.Mode = payload.Mode
    }
  },
  actions: {
    getUser ({commit}, user) {
      commit('updateUser', user)
    },
    getPost ({commit}, post) {
      commit('updatePost', post)
    },
    deleteComment({commit}, comment) {
      commit('deleteCom', comment)
    },
    changeMode({commit}, payload) {
      commit('changeModeMutation', payload)
    }
  },
  modules: {
  }
})
