import authApi from '@/api/auth'
import {setItem} from '@/api/parseStorage'

const state = {
    isSubmitting: false,
    isLoading: false,
    currentUser: null,
    validationErrors: null,
    isLoggedIn: null,
}

const mutations = {
    registerStart(state) {
        state.isSubmitting = true
        state.validationErrors = null
    },
    registerSuccess(state, payload) {
        state.isSubmitting = false
        state.currentUser = payload
        state.isLoggedIn = true
    },
    registerFailure(state, payload) {
        state.isSubmitting = false
        state.validationErrors = payload
    },
    loginStart(state) {
        state.isSubmitting = true
        state.validationErrors = null
    },
    loginSuccess(state, payload) {
        state.isSubmitting = false
        state.currentUser = payload
        state.isLoggedIn = true
    },
    loginFailure(state, payload) {
        state.isSubmitting = false
        state.validationErrors = payload
    },
    getCurrentUserStart(state) {
        state.isLoading = true
    },
    getCurrentUserSuccess(state, payload) {
        state.isLoading = false
        state.currentUser = payload
        state.isLoggedIn = true
    },
    getCurrentUserFailure(state) {
        state.isLoading = false
        state.isLoggedIn = false
        state.currentUser = null
    },
}

const getters = {
    currentUser: (state) => {
        return state.currentUser
    },
    isLoggedIn: (state) => {
        return Boolean(state.isLoggedIn)
    },
    isAnonymous: (state) => {
        return state.isLoggedIn === false
    },
}

const actions = {
    register(context, credentials) {
        return new Promise((resolve) => {
            context.commit('registerStart')
            authApi
                .register(credentials)
                .then((response) => {
                    context.commit('registerSuccess', response.data.user)
                    setItem('accessToken', response.data.user.token)
                    resolve(response.data.user)
                })
                .catch((result) => {
                    context.commit(
                        'registerFailure',
                        result.response.data.errors
                    )
                })
        })
    },
    login(context, credentials) {
        return new Promise((resolve) => {
            context.commit('loginStart')
            authApi
                .login(credentials)
                .then((response) => {
                    context.commit('loginSuccess', response.data.user)
                    setItem('accessToken', response.data.user.token)
                    resolve(response.data.user)
                })
                .catch((result) => {
                    context.commit('loginFailure', result.response.data.errors)
                })
        })
    },
    getCurrentUser(context) {
        return new Promise((resolve) => {
            context.commit('getCurrentUserStart')
            authApi
                .getCurrentUser()
                .then((response) => {
                    context.commit('getCurrentUserSuccess', response.data.user)
                    resolve(response.data.user)
                })
                .catch(() => {
                    context.commit('getCurrentUserFailure')
                })
        })
    },
}
export default {
    state,
    mutations,
    actions,
    getters,
}
