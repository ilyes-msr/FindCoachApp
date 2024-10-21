import requestActions from './actions.js';
import requestGetters from './getters.js';
import requestMutations from './mutations.js'

export default {
  namespaced: true,
  state() {
    return {
      requests: [
        
      ]
    }
  },
  mutations: requestMutations,
  getters: requestGetters,
  actions: requestActions
}