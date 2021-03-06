import { GENRES_STATE, GET_GENRES, GET_GENRES_URI, API_KEY } from './store_constants'
import { apiCall } from '../../utils/apiCall'

// state
const state = {
  genres: {
    data: [],
    state: ''
  }
}

// getters
const getters = {
  //   all genres
  genres: state => state.genres.data,
  genresState: state => state.genres.state
}

// mutations
const mutations = {
  //   set all genres
  [GET_GENRES] (state, payload) {
    state.genres.data = payload.genres
  },
  [GENRES_STATE] (state, payload) {
    state.genres.state = payload
  }
}

// actions
const actions = {
  //   get all genres
  [GET_GENRES] ({ commit }, { cache = true } = {}) {
    commit(GENRES_STATE, 'LOADING')
    if (cache && state.genres.data.length !== 0) {
      commit(GENRES_STATE, 'DATA')
    } else {
      return new Promise((resolve, reject) => {
        apiCall({
          url: `${GET_GENRES_URI}?${API_KEY}`,
          method: 'GET'
        }).then((response) => {
          commit(GENRES_STATE, 'DATA')
          commit(GET_GENRES, response.data)
          resolve(response)
        }).catch((error) => {
          commit(GENRES_STATE, 'ERROR')
          reject(error)
        })
      })
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
