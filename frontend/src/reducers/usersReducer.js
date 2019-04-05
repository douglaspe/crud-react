import { ADD_USER, LOAD_USER, GET_USERS } from '../actions/types';

const userReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
    case LOAD_USER:
      return { ...state, user: action.user };
    case GET_USERS:
      return action.users;
    default:
      return state;
  }
}

export default userReducer; 