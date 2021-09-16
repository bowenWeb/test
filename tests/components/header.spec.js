/* eslint-disable no-undef */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import kyHeader from '@/components/header/index.vue'
const localVue = createLocalVue()
localVue.use(Vuex)
describe('header component', () => {
  const assignMock = jest.fn()
  delete window.location
  window.location = { assign: assignMock }
  afterEach(() => {
    assignMock.mockClear()
  })
  let store
  let state
  beforeEach(() => {
    state = {
      rpcName: ''
    }
    store = new Vuex.Store({
      modules: {
        app: {
          state,
          namespaced: true
        }
      }
    })
  })
  test('header-test', () => {
    const wrapper = shallowMount(kyHeader, {
      store,
      localVue
    })
    expect(wrapper.html()).toContain('header')
    const networks = wrapper.find('.networks-name')
    networks.trigger('click')
    const left = wrapper.find('.left')
    left.trigger('click')
    const user = wrapper.find('.icon-user-wrap')
    user.trigger('click')
  })
})
