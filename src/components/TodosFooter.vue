<template>
  <div>
    <p class="is-pulled-left">{{count}} items left</p>
    <visibility-input/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import VisibilityInput from '@/components/VisibilityInput'

export default {
  components: {
    VisibilityInput
  },
  computed: {
    ...mapGetters(['todos']),
    count: function () {
      var result = 0
      for (var i = 0; i < this.todos.length; i++) {
        if (!this.todos[i].completed) result++
      }
      return result
    }
  }
}
</script>
