const {createStore, applyMiddleware, compose} = require('redux');
const thunk = require('redux-thunk');
const {combineReducers} = require('redux');
const indexReducer = require('../index/index.reduce');
// new
// import Immutable from 'immutable';
// const state = Immutable.fromJS({});
// const store = rootReducer(state);
// export default createStore(reducer, store);

const rootReducer = combineReducers({
    indexReducer:indexReducer
})
//old
const finalCreateStore = compose(applyMiddleware(thunk))(createStore);
module.exports = finalCreateStore(rootReducer);