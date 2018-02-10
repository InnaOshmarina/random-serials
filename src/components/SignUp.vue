<template>
  <div>
      <form class="mt-5" @submit.prevent="registerUser" v-if="show">
          <div class="form-group">
            <label for="email">Ваш email:</label>
            <!-- с помощью v-model соединяем импуты с данными-->
            <input type="email" id="email" class="form-control" placeholder="Введите email:" required v-model="user.email">
          </div>
          <div class="form-group">
            <label for="password">Ваш пароль (минимум 6 символов):</label>
            <input type="password" id="password" class="form-control" placeholder="Введите пароль:" required v-model="user.password">
          </div>
          <div class="form-group">
            <label for="password2">Повторите пароль:</label>
            <input type="password" id="password2" class="form-control" placeholder="Повторите пароль:" required v-model="user.confirmPassword">
          </div>
          <div class="alert alert-danger" role="alert" v-if="errorConfirm">
            <strong>Упс! </strong>Пароли не совпадают.
          </div>
          <div class="alert alert-danger" role="alert" v-if="errorSmall">
            <strong>Упс! </strong>Пароль должен быть более 6 символов.
          </div>
          <button type="submit"class="btn btn-primary">Зарегистрироваться</button>
      </form>
      <div class="alert alert-success mt-5" role="alert" v-if="signSuccess">
            <strong>Поздравляю!</strong> Вы зарегистрировались.
      </div>
      <div class="alert alert-danger mt-5" role="alert" v-if="signError">
            <strong>Упс!</strong> что-то пошло не так.
      </div>
  </div>
</template>

<script>
export default {
  name: 'sign-up',
  data() {
    return {
      show: true,
      signSuccess: false,
      signError: false,
      // соединим импуты с какими-либо данными, чтобы их проверять и получать к ним доступ:
      user: {
        email: '',
        password: '',
        confirmPassword: ''
      },
      errorConfirm: false,
      errorSmall: false
    }
  },
  methods: {
    registerUser() {
      this.errorConfirm = false;
      this.errorSmall = false;
      // вывод ошибки при несовпадении паролей:
      if (this.user.password !== this.user.confirmPassword) {
        this.errorConfirm = true;
      } else if
        (this.user.password.length < 6) {
          this.errorSmall = true;
      } else {
        firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
          .then( () => {
            this.$emit('regSuccess', 'sign-in');
            this.show = false;
            this.sigSuccess = true;
          })
          .catch( error => {
            this.signError = true;
          })
      }
    }
  }
}
</script>

