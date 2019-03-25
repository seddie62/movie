import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import CastMovies from '@/cast/components/CastMovies.vue'
import Antd from 'ant-design-vue'
const localVue = createLocalVue()
localVue.use(Antd)

const data = [{
    adult: false,
    backdrop_path: "/dji4Fm0gCDVb9DQQMRvAI8YNnTz.jpg",
    id: 862,
    genre_ids: [16, 35, 10751],
    original_language: "en",
    original_title: "Toy Story",
    overview: "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.",
    popularity: 27.223,
    poster_path: "/rhIRbceoE9lR4veEXuwCC2wARtG.jpg",
    release_date: "1995-10-30",
    title: "Toy Story",
    video: false,
    character: 'Ini',
    original_name: 'Toy Story',
    vote_average: 7.9,
    vote_count: 9632
}]

const type = 'tv'

describe('CastMovies.vue', () => {
    // testing props
    it('renders cast movies when passed', () => {
      const loading = false
      const wrapper = shallowMount(CastMovies, { localVue,
        propsData: { data, loading, type }
      })
      expect(wrapper.find(".cast-movie-title").text()).to.equal('Toy Story')
      expect(wrapper.find(".cast-movie-character").text()).to.equal('Ini')
    })

    // testing computed properties => title
    it('renders title when passed', () => {
        const loading = false
        const wrapper = shallowMount(CastMovies, { localVue,
          propsData: { data, loading, type }
        })

        expect(wrapper.vm.title).to.equal('original_name')
    })

    // testing computed properties => noData
    it('renders noData when passed', () => {
        const loading = false
        const wrapper = shallowMount(CastMovies, { localVue,
          propsData: { data, loading, type }
        })
        expect(wrapper.vm.noData).to.equal(false)
        expect(wrapper.contains('.no-data')).to.equal(false)
    })

    // testing computed properties => noMoreDataToShow
    it('renders noMoreDataToShow when passed', () => {
        const loading = false
        const wrapper = shallowMount(CastMovies, { localVue,
          propsData: { data, loading, type }
        })
        expect(wrapper.vm.noMoreDataToShow).to.equal(true)
    })
})
