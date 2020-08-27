import axios from 'axios';
// const api =  "https://5ade151bef3fbd0014746da3.mockapi.io"

export const createUser = (body) =>
  axios.post(`/api/budget/user/add`, body)

export const getUserData = (id) =>
  axios.get(`/api/budget/${id}`)

export const addBudgetData = (id,body) =>
  axios.post(`/api/budget/${id}/incexp`, body)

export const updateGoal = (id,body) =>
  axios.put(`/api/budget/${id}/goal`, body)

  export const deleteBudgetEntry = (userId, entryId) =>
    axios.delete(`/api/budget/${userId}/incexp/${entryId}`)