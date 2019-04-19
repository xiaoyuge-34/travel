import Vue from 'vue'
import Vuex from 'vuex'
import state from './stste'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  /* actions: {
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    }
   }, */
  mutations
})
