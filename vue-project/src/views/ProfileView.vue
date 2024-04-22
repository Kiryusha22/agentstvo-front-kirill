<template>
  <div class="profile-view">
    <h1>Личный кабинет</h1>
    <div v-if="user">
      <p><strong>Имя:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <!-- Дополнительные поля профиля можно добавить здесь -->
    </div>
    <div v-else>
      <p>Данные пользователя не найдены.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileView',
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    // Загрузка данных пользователя при монтировании компонента
    this.loadUser();
  },
  methods: {
    loadUser() {
      // Получаем данные пользователя из локального хранилища
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        this.user = user;
      }
    },
  },
};
</script>

<style scoped>
.profile-view {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.profile-view h1 {
  margin-top: 0;
}
</style>
