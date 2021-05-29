import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      profilePicture: "",
      Username: "erennaltin"
    },
    user2: {username: "loading", photo: "https://bluebackend.herokuapp.com/graphql/media/userdefault.png"},
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
    // serverMedia: "https://bluebackend.herokuapp.com/media/",
    serverMedia: "https://bluebackend.herokuapp.com/graphql/media/",
    Mode: '',
    ObjectionTo: '00000000-0000-0000-0000-000000000000'
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
    },
    changeModeMutation(state, payload) {
      state.Mode = payload.Mode
    },
    changeObjection(state, payload) {
      state.ObjectionTo = payload.ObjectionTo
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
    },
    makeObjection({commit}, payload) {
      commit('changeObjection', payload)
    }
  },
  modules: {
  }
})
