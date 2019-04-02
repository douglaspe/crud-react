import { ADD_USER, LOAD_USER, FETCH_USER } from '../actions/types';

const userReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
    case LOAD_USER:
      return { data: action.data }
    case FETCH_USER:
      return action.users;
    default:
      return state;
  }
}

export default userReducer; 