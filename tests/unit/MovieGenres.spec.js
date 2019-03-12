import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import MovieGenres from '@/movies/components/MovieGenres.vue'
import Vuex from 'vuex'
import Antd from 'ant-design-vue'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Antd)

const genres = [
  {name: 'Animation', id: 1}
]

describe('MovieGenres.vue', () => {
    it('renders genres when passed', () => {
      const wrapper = shallowMount(MovieGenres, { localVue,
        propsData: { genres }
      })
      expect(wrapper.text()).to.include('Animation')
    })
})
