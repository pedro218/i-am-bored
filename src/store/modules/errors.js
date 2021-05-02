export const state = {
  errors: [],
}

let nextId = 1;
export const mutations = {
  PUSH(state, error) {
    state.errors.push({
      ...error,
      id: nextId
    })
  },
  DELETE(state, item) {
    state.errors = state.errors.filter(error => error.id !== item)
  },
}

export const actions = {
  add({ commit }, item) {
    commit('PUSH', item)
  },
  remove({ commit }, item) {
    commit('DELETE', item)
  }
}

export const getters = {
  getErrors: (state) => {
    return state.errors
  }
}
