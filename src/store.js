import Vue from 'vue'
import Vuex from 'vuex'
import server from './plugins/axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    restaurants: null
  },
  getters: {
    getRestaurants: (state) => state.restaurants
  },
  mutations: {
    SET_RESTAURANTS(state, payload){
      state.restaurants = payload;
    }
  },
  actions: {
    loadRestaurants: async function({commit}){
      let response = await server.get('search?cuisines=');
      commit('SET_RESTAURANTS', response.data.restaurants);
    }
  }
})
