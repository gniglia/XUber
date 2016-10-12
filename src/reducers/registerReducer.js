import * as types from '../actions/actionTypes';

const register = (state = null, action) => {
  switch (action.type) {
    case types.REGISTER_USER: {
      return {...state, fetching: true}
    }
    default: {
      return state;
    }
  }
};

export default register;
