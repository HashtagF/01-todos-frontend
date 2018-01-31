<template>
  <div id="sorting">
    <div v-for="(todo, index) in filterTodo" :key="todo.title">
      <b-field class="is-pulled-left handle">
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
import Sortable from 'sortablejs'

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
  mounted () {
    let table = document.getElementById('sorting')
    Sortable.create(table, { handle: '.handle', onUpdate: this.onUpdate, animation: 100 })
  },
  methods: {
    ...mapActions([
      'delTodo',
      'statusTodo',
      'sortTable'
    ]),
    onUpdate: function (event) {
      this.sortTable({ newIndex: event.newIndex, oldIndex: event.oldIndex })
    }
  }
}
</script>
