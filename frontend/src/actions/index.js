import { ADD_USER, LOAD_USER, FETCH_USER} from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:3001/users';

export const createUser = ({ name, email }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}`, {name, email})
      .then(response => {
        dispatch(createUserSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createUserSuccess =  (data) => {
  return {
    type: ADD_USER,
    payload: {
      id: data.id,
      name: data.name,
      email: data.email
    }
  }
};

export const loadUser = user => ({ type: LOAD_USER, user })

export const updateUser = id => {
  return (dispatch) => {
    return axios.put(`${apiUrl}/${id}`)
      .then(response => {
        dispatch(fetchAllUsers())
      })
      .catch(error => {
        throw(error);
      });
  };
}

export const deleteUser = id => {
    return (dispatch) => {
      return axios.delete(`${apiUrl}/${id}`)
        .then(response => {
          dispatch(fetchAllUsers())
        })
        .catch(error => {
          throw(error);
        });
    };
  };
  
  export const fetchUsers = (users) => {
    return {
      type: FETCH_USER,
      users
    }
};
  
export const fetchAllUsers = () => {
    return (dispatch) => {
      return axios.get(apiUrl)
        .then(response => {
          dispatch(fetchUsers(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };