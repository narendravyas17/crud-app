import axios from "axios";

const URL = "http://localhost:8000";

export const addUser = async (user) => {
  try {
    return await axios.post(`${URL}/add`, user);
  } catch (error) {
    console.log("Error while calling and User api ", error);
  }
}

  export const getUsers = async () => {
    try {
    return await axios.get(`${URL}/all`);
    } catch (error) {
        console.log('Error while calling getUsers API', error);
    }
  }

  export const getUser = async (id) => {
    try {
    return await axios.get(`${URL}/${id}`);
    } catch (error) {
        console.log('Error while calling getUser API', error);
    }
  }

  export const editUser = async (user, id) => {
    try {
        return await axios.put(`${URL}/${id}`, user);
    } catch (error) {
      console.log("Error while calling and editUser api ", error);
    }
  }

  export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${URL}/${id}`);
    } catch (error) {
      console.log("Error while calling and deleteUser api ", error);
    }
  }

// import axios from 'axios';

// // const usersUrl = 'http://localhost:3003/users';
// const usersUrl = 'http://localhost:8000';

// export const getUsers = async (id) => {
//     id = id || '';
//     return await axios.get(`${usersUrl}/${id}`);
// }

// export const addUser = async (user) => {
//     return await axios.post(`${usersUrl}/add`, user);
// }

// export const deleteUser = async (id) => {
//     return await axios.delete(`${usersUrl}/${id}`);
// }

// export const editUser = async (id, user) => {
//     return await axios.put(`${usersUrl}/${id}`, user)
// }