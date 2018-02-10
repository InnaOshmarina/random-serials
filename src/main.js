import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import MainPage from './components/MainPage.vue'
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  routers: [
    { path: '/serials', component: MainPage },
    { path: '/sign-in', component: SignIn },
    { path: '/sign-up', component: SignUp }
  ],
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// new Vue({
//   el: '#app',
//   router: router,
//   render: h => h(App, 'router-view')
// })
