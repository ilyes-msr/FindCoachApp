export default {
  requests(state, _, _2, rootGetters) {
    const activeCoach = rootGetters.userId;
    return state.requests.filter(req => req.coachId === activeCoach)
  },
  requestsCount(_, getters) {
    return getters.requests.length
  }
}