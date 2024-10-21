export default {
  async addRequest(context, requestData) {
    const response = await fetch(`https://findacoachapp-e49ab-default-rtdb.firebaseio.com/requests/${requestData.coachId}.json`, {
      method: 'POST',
      body: JSON.stringify(requestData)
    });

    const responseData = await response.json();

    if(!response.ok) {
      const error = new Error(responseData.message || 'Failed to send request..');
      throw error;
    }

    requestData.id = responseData.name; // name field generatedby Firebase
    
    context.commit('addRequest', requestData)
  },

  async loadRequests(context) {

    const activeCoachId = context.rootGetters.userId;
    // console.log(activeCoachId)
    // console.log('LOAD REQUESTS ACTION')
    const response = await fetch(`https://findacoachapp-e49ab-default-rtdb.firebaseio.com/requests/${activeCoachId}.json`);

    const responseData = await response.json();
    if(!response.ok) {
      const error = new Error(responseData.message || 'Faild to load requests');
      throw error;
    }

    const requests = [];
    
    for(const key in responseData) {
      const request = {
        id: key,
        coachId: activeCoachId,
        email: responseData[key].email,
        message: responseData[key].message,

      }
      requests.push(request);
    }
    context.commit('setRequests', requests);
  }
}