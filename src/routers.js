import Hello from './components/views/Hello.vue'
import About from './components/views/About.vue'

export default [
  {path: '/', redirect: '/index'},
  {path: '/index', component: Hello},
  {path: '/about', component: About}
]
