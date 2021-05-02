import apicalls from '@/services/apicalls.js'

export const state = {
  joke: {},
}
export const mutations = {
  SET_JOKE(state, joke) {
    state.joke = joke
  },
}
export const actions = {
  async fetchJoke({ commit, dispatch }, { category, blacklist }) {
    try {
      const response = await apicalls.callJokesapi(category, blacklist)
      const flags = []
      const keys = Object.keys(response.flags)
      for (const key in keys) {
        if (response.flags[keys[key]]) flags.push(keys[key])
      }
      response.flags = flags
      if (response) {
        commit('SET_JOKE', response)
      }
    } catch (error) {
      const currentError = {
        type: 'error',
        message: 'There was a problem fetching your joke: ' + error.message
      }
      dispatch('add', currentError, { root: true })
    }
  },
}
export const getters = {
  getJoke: (state) => {
    return state.joke
  },
}
