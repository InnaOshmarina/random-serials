<template>
   <div>
     <div class="container-fluid d-flex justify-content-end">
       <div class="row">
         <div class="col">
           <nav class="navbar">
             <form class="form-inline">
               <div v-if="!signComplete">
                 <router-link to="/sign-in">
                    <button class="btn btn-outline-success mr-3" type="button" @click="switchSign('sign-in')">Войти</button>
                 </router-link>
                 <router-link to="/sign-up">
                    <button class="btn btn-outline-success mr-3" type="button" @click="switchSign('sign-up')">Регистрация</button>
                 </router-link>
               </div>
               <div v-else>
                 <router-link to="/serials">
                 <!-- если вход будет выполнен, то будет показана данная кнопка: -->
                    <button class="btn btn-outline-success" type="button">Список сериалов</button>
                 </router-link>
                 <!-- если вход будет выполнен, то будет показан email: -->
                 <span class="ml-4">{{ email }}</span>
               </div>
             </form>
           </nav>
         </div>
       </div>
     </div>
     <!-- если тут будет false, то наш блок будет показан: -->
     <div class="container">
       <div class="row">
         <div class="col">
           <router-view @addUser="email = $event.email, signComplete = $event.signComplete, userUid = $event.uid" :id="uid"></router-view>
         </div>
       </div>
     </div>
   </div>
</template>

<script>
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'
import MainPage from './components/MainPage.vue'
export default {
  name: 'app',
  data() {
    return {
      signComplete: false,
      email: '',
      uid: ''
    }
  },
  components: {
    SignIn,
    SignUp,
    MainPage
  },
  methods: {
    switchSign(currentSign) {
      this.sign = currentSign;
    }
  }
}
</script>

<style lang="scss" scoped>
 div.container-fluid {
   background: #0e0e4d;
   span {
     color: #ffffff;
   }
 }
</style>
