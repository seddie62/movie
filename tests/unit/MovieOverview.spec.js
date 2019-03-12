import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import MovieOverview from '@/movies/components/MovieOverview.vue'
import Antd from 'ant-design-vue'
const localVue = createLocalVue()
localVue.use(Antd)

describe('MovieOverview.vue', () => {
    it('renders overview when passed', () => {
      const overview = "A test overview"
      const wrapper = shallowMount(MovieOverview, { localVue,
        propsData: { overview }
      })
      expect(wrapper.text()).to.include(overview)
    })
})
