export default {
  registerCoach(context, coachData) {
    const newCoach = {
      id: context.rootGetters.userId,
      firstName: coachData.first,
      lastName: coachData.last,
      areas: coachData.areas,
      description: coachData.desc,
      hourlyRate: coachData.rate
    }

    context.commit('registerCoach', newCoach)
  }
}