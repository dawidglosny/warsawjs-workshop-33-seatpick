import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
  reservedSeats: [ 'A1', 'B2', 'C3' ],
}

const mutations = {
  'RESERVE_SEATS' (state, payload) {
    state.reservedSeats = payload
  }
}

const actions = {
  collectReservedSeats ({ commit, state }, payload) {
    const updatedSeats = state.reservedSeats.concat(payload)
    commit('RESERVE_SEATS', updatedSeats)
  }
}

const getters = {
  getReservedSeats: state => state.reservedSeats
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})
