import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import EmptyComponent from '@/components/EmptyComponent.vue'

describe('EmptyComponent.vue', () => {
  it('renders props.message when passed', () => {
    const message = 'new message'
    const wrapper = shallowMount(EmptyComponent, {
      propsData: { message }
    })
    expect(wrapper.text()).to.include(message)
  })
})
