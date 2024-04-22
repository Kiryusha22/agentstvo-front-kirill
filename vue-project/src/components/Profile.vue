<template>
  <div class="profile">
    <h1>Личный кабинет</h1>
    <div v-if="isLoggedIn">
      <p><strong>Имя:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <!-- Другие поля профиля -->
    </div>
    <div v-else>
      <p>Вы не вошли в аккаунт.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn; // предположим, что состояние isLoggedIn хранится в Vuex
    },
    user() {
      return this.$store.state.user; // предположим, что данные пользователя хранятся в состоянии Vuex
    },
  },
};
</script>

<style scoped>
.profile {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.profile h1 {
  margin-top: 0;
}
</style>
