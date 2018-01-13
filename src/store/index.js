import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    todos: [],
    visibility: 'all'
  },
  mutations: {
    ADD_TODO (state, title) {
      state.todos.push({
        title,
        completed: false
      })
    },
    CHANGE_VISIBILITY (state, newVisibilityValue) {
      state.visibility = newVisibilityValue
    },
    DEL_TODO (state, index) {
      state.todos.splice(index, 1)
    },
    STATUS_TODO (state, index) {
      state.todos[index].completed = !state.todos[index].completed
    }
  },
  actions: {
    addTodo ({commit}, title) {
      commit('ADD_TODO', title)
    },
    changeVisibility ({commit}, newVisibilityValue) {
      commit('CHANGE_VISIBILITY', newVisibilityValue)
    },
    delTodo ({commit}, index) {
      commit('DEL_TODO', index)
    },
    statusTodo ({commit}, index) {
      commit('STATUS_TODO', index)
    }
  },
  getters: {
    todos: state => state.todos,
    visibility: state => state.visibility
  }
})
