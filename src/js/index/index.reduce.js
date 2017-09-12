const {
    TEST,

} = require('./index.action');

function indexReducer(state = {}, action) {
    switch (action.type) {
      case TEST:
      console.log(action);
        return action.data;
      default:
        return state;
    }
  }
  module.exports = indexReducer