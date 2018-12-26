import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state = {
  count: 1
}

var mutations = {
  addCount() {
    ++state.count
  }
}

const store = new Vuex.Store({ state, mutations })

export default store
