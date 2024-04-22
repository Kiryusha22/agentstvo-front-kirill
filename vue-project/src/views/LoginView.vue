<template>
  <div>
    <h2>Авторизация</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Имя пользователя:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Пароль:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div>
        <button type="submit">Войти</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.username === this.username) {
        this.$router.push('/');
      } else {
        alert('Неверное имя пользователя или пароль');
      }
    },
  },
};
</script>
