import {createStore} from 'vuex';

import coachesModule from './modules/caoches/index'
import requestsModule from './modules/requests/index';
import authModule from './modules/auth/index';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
    auth: authModule
  }
});

export default store;