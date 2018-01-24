<template>
  <div>
    <div v-for="(todo, index) in filterTodo" :key="todo.title">
      <b-field class="is-pulled-left">
        <b-checkbox size="is-large" :value="todo.completed" @input="statusTodo(index)">
          <strike v-if="todo.completed">{{ todo.title }}</strike>
          <span v-else >{{ todo.title }}</span>
        </b-checkbox>
      </b-field>
      <a class="delete is-pulled-right" @click="delTodo(index)" ></a>
      <div class="is-clearfix"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'todos',
      'visibility'
    ]),
    filterTodo: function () {
      if (this.visibility === 'active') {
        return this.todos.filter(todo => todo.completed === false)
      } else if (this.visibility === 'completed') {
        return this.todos.filter(todo => todo.completed === true)
      } else return this.todos
    }
  },
  methods: {
    ...mapActions([
      'delTodo',
      'statusTodo'
    ])
  }
}
</script>
