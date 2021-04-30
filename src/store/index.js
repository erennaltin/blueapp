import { createStore } from 'vuex'
const axios = require('axios').default;

export default createStore({
  state: {
    user: {
      profilePicture: "https://random.imagecdn.app/200/200",
      Username: "erennaltin"
    },
    user2: "",
    homePost: {
      uuid: "g",
      PublishDate: "20.04.2021 - 20:00",
      Title: "What really American police thinks about racism?",
      Text: "America’s epidemic of police violence is not limited to what’s on the news. For every high-profile story of a police officer killing an unarmed Black person or tear-gassing peaceful protesters, there are many, many allegations of police misconduct you don’t hear about — abuses ranging from excessive use of force to mistreatment of prisoners to planting evidence. African Americans are arrested and roughed up by cops at wildly disproportionate rates, relative to both their overall share of the population and the percentage of crimes they commit. America’s epidemic of police violence is not limited to what’s on the news. For every high-profile story of a police officer killing an unarmed Black person or tear-gassing peaceful protesters, there are many, many allegations of police misconduct you don’t hear about — abuses ranging from excessive use of force to mistreatment of prisoners to planting evidence. African Americans are arrested and roughed up by cops at wildly disproportionate rates, relative to both their overall share of the population and the percentage of crimes they commit.",
      Photo: "https://random.imagecdn.app/400/300",
      Tags: "racism,american,police,black",
      Category: "racism"
    },

  },
  mutations: {
    SET_POSTS(state, user) {
      state.user = user
      }
  },
  actions: {
    getUser({ commit }) {
      axios.get('http://127.0.0.1:8000/graphql')
      .then(response => {
      commit('SET_POSTS', response.data)
        })
      }
  },
  modules: {
  }
})
