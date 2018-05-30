import comp1 from './components/comp1'
import comp2 from './components/comp2'

/* const Components = {
    comp1,
    comp2
}
const install = function (Vue, locale) {
  for (let i in Components) {
    Vue.component(i, Components[i])
  }
} */

const Components = {}

function install(Vue) {
  Vue.component(comp1.name, comp1)
  Vue.component(comp2.name, comp2)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

//export default {install:install}

Components.install = install

export default Components
