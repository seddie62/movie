import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import MovieInfo from '@/movies/components/MovieInfo.vue'
import Antd from 'ant-design-vue'
const localVue = createLocalVue()
localVue.use(Antd)

const movie = {
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
    vote_average: 8,
    vote_count: 9632
}

describe('MovieInfo.vue', () => {
    // testing props
    it('renders movie info when passed', () => {
      const wrapper = shallowMount(MovieInfo, { localVue,
        propsData: { movie }
      })
      expect(wrapper.find('h4').text()).to.include('Toy Story')
    })

    // testing computed
    it('reacts to movie info when passed', () => {
      const wrapper = shallowMount(MovieInfo, { localVue,
        propsData: { movie }
      })
      expect(wrapper.vm.rate).to.equal(4)
    })
})
