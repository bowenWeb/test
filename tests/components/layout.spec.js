/* eslint-disable no-undef */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import layout from '@/components/layout/index.vue'
const Dexie = require('dexie')
Dexie.dependencies.indexedDB = require('fake-indexeddb')
Dexie.dependencies.IDBKeyRange = require('fake-indexeddb/lib/FDBKeyRange')

const localVue = createLocalVue()
localVue.use(Vuex)

describe('layout component', () => {
  let store
  let state
  let mutations
  beforeEach(() => {
    state = { }
    mutations = {
      SET_ACTIVENETWORKS () {},
      SET_LANGUAGE () {},
      SET_CURRENCY () {}
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
  test('layout-test', () => {
    const wrapper = shallowMount(layout, {
      localVue,
      store,
      mocks: {
        $t: key => []
      }
    })
    expect(wrapper.html()).toContain('layout-compontent')
  })
})
