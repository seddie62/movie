import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import movies from '../movies/store/movies'
import extra from './modules/extra'
import person from '../cast/store/person'

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

Vue.use(Vuex)
Vue.config.devtools = true

export default new Vuex.Store({
  modules: {
    movies,
    person,
    extra
  }
})
