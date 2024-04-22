import { createStore } from 'vuex';

export default createStore({
    state: {
        user: null,
        isLoggedIn: false,
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
            state.isLoggedIn = true;
        },
        logout(state) {
            state.user = null;
            state.isLoggedIn = false;
        },
    },
    actions: {
        loginUser({ commit }, user) {
            // Здесь вы можете реализовать логику входа, например, отправить данные на сервер
            // и при успешном входе вызвать commit('setUser', userData);
            commit('setUser', user);
        },
        // Другие действия
    },
    modules: {
        // Если у вас есть модули Vuex, их можно импортировать здесь
    },
});
