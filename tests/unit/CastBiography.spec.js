import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import CastBiography from '@/person/components/CastBiography.vue'
import Antd from 'ant-design-vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Antd)
localVue.use(Vuex)

const store = new Vuex.Store({
    state: {
      biography: {
        data: {name: 'Bruce Wayne', biography: 'Wendy Brown'},
        state: 'DATA'
      }
    },
  
    getters: {
      person: (state) => state.biography.data,
      personState: (state) => state.biography.state
    }
  })

describe('CastBiography.vue', () => {
    // testing reviews
    it('renders cast biography when passed', () => {
      const wrapper = shallowMount(CastBiography, { store, localVue } )
      expect(wrapper.find("h4").text()).to.include('Bruce Wayne')
      expect(wrapper.find("p").text()).to.include('Wendy Brown')
    })
})