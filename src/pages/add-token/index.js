import Vue from 'vue'
import pageComponent from './component/index.vue'
import i18n from '../../i18n'
import router from '../../router'
import store from '../../store'
import { Input, Button, Icon } from 'element-ui'
Vue.use(Input)
Vue.use(Button)
Vue.use(Icon)
Vue.component('pageComponent', pageComponent)
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: createElement => {
    return createElement(pageComponent)
  }
})