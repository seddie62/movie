import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import MovieReviews from '@/movies/components/MovieReviews.vue'
import Antd from 'ant-design-vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Antd)
localVue.use(Vuex)

const store = new Vuex.Store({
    state: {
      movieReviews: {
          data: [{author: 'Bruce Wayne',
          content: 'Wendy Brown'}],
          state: 'DATA'
      }
    },
  
    getters: {
      movieReviews: (state) => state.movieReviews.data,
      movieReviewsState: (state) => state.movieReviews.state
    }
  })

describe('MovieReviews.vue', () => {
    // testing reviews
    it('renders review when passed', () => {
      const wrapper = shallowMount(MovieReviews, { store, localVue } )
      expect(wrapper.find("a").text()).to.include('Bruce Wayne')
      expect(wrapper.find("p").text()).to.include('Wendy Brown')
    })
})