import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Movie from '@/movies/components/Movie.vue'
import Antd from 'ant-design-vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Antd)
localVue.use(Vuex)

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

const store = new Vuex.Store({
    state: {
      genres: {
        data: [
            {name: 'Animation', id: 16},
            {name: 'Comedy', id: 35},
            {name: 'Action', id: 10751}
        ],
        state: 'DATA'
      }
    },
  
    getters: {
      genres: (state) => state.genres.data,
      genresState: (state) => state.genres.state
    }
  })

describe('Movie.vue', () => {
    // testing props
    it('renders movie info when passed', () => {
      const wrapper = shallowMount(Movie, { localVue, store,
        propsData: { movie }
      })
      expect(wrapper.find('p.movie-title').text()).to.include('Toy Story')
    })

    // testing movieGenres computed property computed
    it('reacts to computed property movieGenres when passed', () => {
      const wrapper = shallowMount(Movie, { localVue, store,
        propsData: { movie }
      })
      expect(wrapper.find('li.genres-list').text()).to.include('Animation')
    })

    // testing computed property rate
    it('reacts to rate when passed', () => {
        const wrapper = shallowMount(Movie, { localVue, store,
          propsData: { movie }
        })
        expect(wrapper.vm.rate).to.equal(4)
      })
})
