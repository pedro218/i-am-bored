import { createStore } from 'vuex'
import * as bored from './modules/boredcall'
import * as jokes from './modules/jokescall'
import * as errors from './modules/errors'

export default createStore({
  modules: {
    bored,
    jokes,
    errors,
  },
})
