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
    },
    CLEAR_TODOS (state) {
      for (let i = state.todos.length - 1; i >= 0; i--) {
        if (state.todos[i].completed) {
          state.todos.splice(i, 1)
        }
      }
    },
    SETTODOS (state, todos) {
      state.todos = todos
    }
  },
  actions: {
    addTodo ({commit, dispatch}, title) {
      commit('ADD_TODO', title)
      dispatch('saveStorage')
    },
    changeVisibility ({commit}, newVisibilityValue) {
      commit('CHANGE_VISIBILITY', newVisibilityValue)
    },
    delTodo ({commit, dispatch}, index) {
      commit('DEL_TODO', index)
      dispatch('saveStorage')
    },
    statusTodo ({commit}, index) {
      commit('STATUS_TODO', index)
    },
    clearTodos ({commit, dispatch}) {
      commit('CLEAR_TODOS')
      dispatch('saveStorage')
    },
    saveStorage ({state}) {
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    setTodos ({commit}, todos) {
      commit('SETTODOS', todos)
    }
  },
  getters: {
    todos: state => state.todos,
    visibility: state => state.visibility
  }
})
