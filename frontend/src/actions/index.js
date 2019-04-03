import { ADD_USER, LOAD_USER, GET_USERS } from './types';
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

export const createUserSuccess = (data) => {
  return {
    type: ADD_USER,
    payload: {
      id: data.id,
      name: data.name,
      email: data.email
    }
  }
};

export const loadUser = user => ({
  type: LOAD_USER, user
})

export const updateUser = (id, {name, email}) => {
  return (dispatch) => {
    return axios.put(`${apiUrl}/${id}`, {name, email})
      .then(response => {
        dispatch(getAllUsers())
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
          dispatch(getAllUsers())
        })
        .catch(error => {
          throw(error);
        });
    };
  };
  
  export const getUsers = (users) => {
    return {
      type: GET_USERS,
      users
    }
};
  
export const getAllUsers = () => {
    return (dispatch) => {
      return axios.get(apiUrl)
        .then(response => {
          dispatch(getUsers(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
};