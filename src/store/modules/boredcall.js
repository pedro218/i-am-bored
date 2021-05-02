import apicalls from '@/services/apicalls.js'

export const state = {
  activity: {},
}
export const mutations = {
  SET_ACTIVITY(state, activity) {
    state.activity = activity
  },
}
export const actions = {
  async fetchAction({ commit, dispatch }, type) {
    try {
      const response = await apicalls.callBoredapi(type)
      if (response) {
        commit('SET_ACTIVITY', response)
      }
    } catch (error) {
      const currentError = {
        type: 'error',
        message: 'There was a problem fetching your activity: ' + error
      }
      dispatch('add', currentError, { root: true })
    }
  },
}
export const getters = {
  getActivity: (state) => {
    return state.activity
  },
}
