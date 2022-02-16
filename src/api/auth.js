const axios = require('axios')
import {getItem} from '@/api/parseStorage'

axios.defaults.baseURL = 'https://conduit.productionready.io/api'
axios.interceptors.request.use((config) => {
    const token = getItem('accessToken')
    const authorizationToken = token ? `Token ${token}` : ''
    console.log(authorizationToken)
    config.headers.Authorization = authorizationToken
    return config
})

const register = (credentials) => {
    // api запрос
    return axios.post('/users', {user: credentials})
}

const login = (credentials) => {
    return axios.post('/users/login', {user: credentials})
}

const getCurrentUser = () => {
    return axios.get('/user')
}

export default {
    register,
    login,
    getCurrentUser,
}
