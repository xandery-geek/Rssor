import { createStore } from 'vuex'
import state from './state';

// import actions from './actions';
// import getters from './getters';
// import mutations from './mutations';
// import storage from './storage';


const store = createStore({
    state(){
        return state;
    },
    // actions,
    // getters,
    // mutations,
    strict: process.env.NODE_ENV !== 'production'
});

export default store;
