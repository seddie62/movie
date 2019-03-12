import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import PersonalInfo from '@/person/components/PersonalInfo.vue'
import Antd from 'ant-design-vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Antd)
localVue.use(Vuex)

const store = new Vuex.Store({
    state: {
      person: {
          data: {
            adult:false,
            biography: "Brianne Sidonie Desaulniers (born October 1, 1989), known professionally as Brie Larson, is an American actress, director, and singer. Born in Sacramento, California, Larson was home-schooled before she studied acting at the American Conservatory Theater. She began her acting career in television, appearing as a regular on the 2001 sitcom Raising Dad, for which she was nominated for a Young Artist Award. As a teenager, Larson had brief roles in the 2004 films 13 Going on 30 and Sleepover. Her performance in the comedy film Hoot (2006) was praised, and she subsequently played supporting roles in the films Greenberg (2010), Scott Pilgrim vs. the World (2010), 21 Jump Street (2012), and Don Jon (2013). From 2009 to 2011, Larson featured as a rebellious teenager in the television series United States of Tara. Larson's breakthrough role came with the independent drama Short Term 12 (2013), for which she received critical acclaim. Further success came in 2015 when she starred in Room, an acclaimed drama based on Emma Donoghue's novel of the same name. She won several awards for her portrayal of a troubled mother kidnap victim in the film, including the Academy Award, BAFTA Award, Critic's Choice Award, Golden Globe Award, Screen Actors Guild Award and Canadian Screen Award for Best Actress. In 2017, she starred as a war photographer in the adventure film Kong: Skull Island, her highest-grossing release.",
            birthday: "1989-10-01",
            gender: 1,
            id: 60073,
            imdb_id: "nm0488953",
            known_for_department: "Acting",
            name: "Brie Larson",
            place_of_birth: "Sacramento, California, USA",
            popularity: 39.097,
            profile_path: "/ngWVdA5MedDfq7XKaXivAbmpo8k.jpg"
            
          },
          state: 'DATA'
      }
    },
  
    getters: {
      person: (state) => state.person.data,
      personState: (state) => state.person.state
    }
  })

describe('PersonalInfo.vue', () => {
    // testing reviews
    it('renders personal info when passed', () => {
      const wrapper = shallowMount(PersonalInfo, { store, localVue } )
      expect(wrapper.find("h4").text()).to.include('Brie Larson')
    })
})