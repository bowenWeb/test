/* eslint-disable no-undef */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import kyNetwork from '@/components/header/network.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('network component', () => {
  const assignMock = jest.fn()
  delete window.location
  window.location = { assign: assignMock }
  afterEach(() => {
    assignMock.mockClear()
  })
  let store
  let state
  let mutations
  beforeEach(() => {
    state = {
      address: 'f1ntv4qlgoi55wqqxrxxolatfdgn7xvu7vfhrkcfq',
      networkType: 'proxy'
    }
    mutations = {
      SET_ACTIVENETWORKS () {

      }
    }
    store = new Vuex.Store({
      modules: {
        app: {
          state,
          mutations,
          namespaced: true
        }
      }
    })
  })
  Object.defineProperty(window, 'dataObj', {
    value: {
      href: './welcome.html'
    }
  })
  test('network-test', () => {
    const wrapper = shallowMount(kyNetwork, {
      localVue,
      store,
      mocks: {
        $t: key => key
      }
    })
    expect(wrapper.html()).toContain('select-network-component')
    const close = wrapper.find('.close')
    close.trigger('click')
    const netwotkItem = wrapper.find('.netwotk-item')
    netwotkItem.trigger('click')
    const customItem = wrapper.find('.custom-item')
    customItem.trigger('click')
  })
})
