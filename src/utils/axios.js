import axios from 'axios'
import { API } from './config'
import { getToken } from './helper'

axios.defaults.baseURL = API
axios.defaults.withCredentials = true

axios.interceptors.request.use(config => {
  try {
    let token = getToken()
    config.headers.common['Accept'] = 'application/json'
    config.headers.common['Content-Type'] = 'application/json'
    if (token) {
      config.headers.common['Authorization'] = 'Bearer ' + token
    }
  } catch (error) {
    console.error(error)
  }
  return config
})

axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response
    } else {
      return Promise.reject(response)
    }
  },
  response => {
    return Promise.reject(response)
  }
)
