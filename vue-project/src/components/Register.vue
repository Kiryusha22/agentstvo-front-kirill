<template>
  <div class="register">
    <h2>Регистрация</h2>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label for="name">Имя:</label>
        <input type="text" id="name" v-model="user.name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="user.email" required>
      </div>
      <div class="form-group">
        <label for="password">Пароль:</label>
        <input type="password" id="password" v-model="user.password" required>
      </div>
      <button type="submit">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    async registerUser() {
      try {
        // Отправляем данные пользователя на сервер
        const response = await axios.post('https://your-api-url/register', this.user);

        // Если регистрация прошла успешно, сохраняем данные пользователя в локальном хранилище
        localStorage.setItem('user', JSON.stringify(response.data));

        // Перенаправляем пользователя на страницу входа
        if (this.$router) {
          this.$router.push('/login');
        } else {
          console.error('Объект маршрутизатора недоступен');
        }
      } catch (error) {
        // Обрабатываем ошибку (например, выводим сообщение об ошибке)
        console.error('Ошибка при регистрации:', error);
      }
    },
  },
};
</script>


<style scoped>
.register {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
