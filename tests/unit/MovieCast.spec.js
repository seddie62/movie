import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import { expect } from 'chai'
import MovieCast from '@/movies/components/MovieCast.vue'
import Antd from 'ant-design-vue'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Antd)

const store = new Vuex.Store({
  state: {
    movieCast: {
        data: [{
            cast_id: 14,
            character: "Woody (voice)",
            credit_id: "52fe4284c3a36847f8024f95",
            gender: 2,
            id: 31,
            name: "Tom Hanks",
            order: 0,
            profile_path: "/altwR3skJ9L4082tHPIRtTVYDg3.jpg"
        }],
        state: 'DATA'
    }
  },

  getters: {
    movieCast: (state) => state.movieCast.data,
    movieCastState: (state) => state.movieCast.state,
  }
})

describe('MovieCast.vue', () => {
    // testing the getter
    it("renders a movie cast using a real Vuex getter", () => {
        const wrapper = shallowMount(MovieCast, { store, localVue })

        expect(wrapper.find("p.cast-name").text()).to.equal("Tom Hanks")
        expect(wrapper.find("p.cast-character").text()).to.equal("Woody (voice)")
    })

    // tesing if there's a button
    it('has a button', () => {
        const wrapper = shallowMount(MovieCast, { store, localVue })
        expect(wrapper.contains('.transparent-button')).to.equal(true)
    })

    // testing button click
    it('button click should increase the count', () => {
        const wrapper = shallowMount(MovieCast, { store, localVue })
        expect(wrapper.vm.number).to.equal(5)
        wrapper.find('.transparent-button').trigger('click')
        expect(wrapper.vm.number).to.equal(5)
    })
})
