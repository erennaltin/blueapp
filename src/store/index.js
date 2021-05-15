import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      profilePicture: "https://random.imagecdn.app/200/200",
      Username: "erennaltin"
    },
    user2: {username: "loading", photo: "/images/userdefault.png"},
    homePost: {
      uuid: "Loading",
      PublishDate: "Loading",
      Title: "Loading",
      Text: "Loading",
      Photo: "http://127.0.0.1:8000/media/images/default.png",
      Tags: "Loading",
      Category: "Loading"
    },
    InitialPost: {
      uuid: "Loading",
      PublishDate: "Loading",
      Title: "Loading",
      Text: "Loading",
      Photo: "/images/default.png",
      Owner: {
        username: "loading",
        photo: "/images/userdefault.png"
      },
      Tags: "Loading",
      Category: "Loading"
    },
    isAuth: false,
    initial: true,
    serverMedia: "http://127.0.0.1:8000/media/"
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
    }
  },
  modules: {
  }
})
