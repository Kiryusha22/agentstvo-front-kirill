<template>
  <header>
    <nav>
      <div class="logo">
        <b>Домовой</b>
      </div>
      <div class="center-nav">
        <ul>
          <li><router-link to="/">Главная</router-link></li>
          <li><router-link to="/about">О нас</router-link></li>
          <li><router-link to="/contact">Контакты</router-link></li>
        </ul>
      </div>
      <div class="right-nav">
        <ul>
          <li v-if="!isLoggedIn"><router-link to="/register">Регистрация</router-link></li>
          <li v-if="!isLoggedIn"><router-link to="/login">Вход</router-link></li>
          <li v-if="isLoggedIn"><router-link to="/profile">Личный кабинет</router-link></li>
          <li v-if="isLoggedIn"><button @click="logout">Выход</button></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isLoggedIn: false,
    };
  },
  mounted() {
    // Проверка, авторизован ли пользователь
    this.checkAuthentication();
  },
  methods: {
    checkAuthentication() {
      const user = JSON.parse(localStorage.getItem('user'));
      this.isLoggedIn = !!user;
    },
    logout() {
      localStorage.removeItem('user');
      this.isLoggedIn = false;
      this.$router.push('/');
    },
  },
};
</script>

<style>
header {
  background-color: #000000;
  color: white;
  padding: 1em;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo b {
  margin: 0;
  padding: 0;
  font-size: 1.5em;
}

.center-nav {
  flex-grow: 1;
  text-align: center;
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

nav ul li {
  display: inline;
  margin-right: 20px;
}

nav ul li a,
nav ul li button {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
  border: none;
  background: none;
  cursor: pointer;
}

nav ul li a:hover,
nav ul li button:hover {
  color: #FFC107;
}
</style>
