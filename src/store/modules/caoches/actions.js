export default {
  async registerCoach(context, coachData) {
    const userId = context.rootGetters.userId;
    const newCoach = {
      firstName: coachData.first,
      lastName: coachData.last,
      areas: coachData.areas,
      description: coachData.desc,
      hourlyRate: coachData.rate
    }

    const response = await fetch(`https://findacoachapp-e49ab-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
      method: 'PUT',
      body: JSON.stringify(newCoach)
    })

    if(!response.ok) {
      // ..error
    }

    const responseData = await response.json();
    console.log(responseData);
    
    context.commit('registerCoach', {
      ...newCoach,
      id: userId
    })
  },

  async loadCoaches(context) {
    const response = await fetch(`https://findacoachapp-e49ab-default-rtdb.firebaseio.com/coaches.json`);
    
    const responseData = await response.json();
    // console.log(responseData)
    if(!response.ok) {
      // error ..
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const coaches = [];
    for(const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        areas: responseData[key].areas,
        description: responseData[key].desceription,
        hourlyRate: responseData[key].hourlyRate
      };
      coaches.push(coach);
    }

    context.commit('setCoaches', coaches);
  }
}