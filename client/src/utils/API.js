import axios from 'axios';
const api =  "https://5ade151bef3fbd0014746da3.mockapi.io"

export const getAll = () =>
  axios.get(`${api}/api/v1/records`)

export const create = (body) =>
  axios.post(`${api}/api/v1/records`, body)

export const update = (id, body) =>
  axios.put(`${api}/api/v1/records/${id}`, body)

export const remove = (id) =>
  axios.delete(`${api}/api/v1/records/${id}`)

  