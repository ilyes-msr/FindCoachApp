export default {
  requests(state, _, _2, rootGetters) {
    const activeCoach = rootGetters.userId;
    return state.requests.filter(req => req.coachId === activeCoach)
  },
  getRequests(state) {
    return state.requests
  },
  requestsCount(_, getters) {
    return getters.getRequests.length
  },
}