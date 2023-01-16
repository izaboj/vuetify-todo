<template>
  <div class="home">
    <todo-list v-if="$store.state.items.length"> </todo-list>
    <no-tasks v-else></no-tasks>
    <v-btn
      v-if="$store.state.sorting"
      @click="$store.commit('toggleSorting')"
      class="sorting-close-button"
      color="primary"
      >SEARCH DONE</v-btn
    >
  </div>
</template>

<script>
import noTasks from "@/components/Todo/NoTasks.vue";
import todoList from "@/components/Todo/ToDoList.vue";

export default {
  name: "ToDo",
  components: {
    noTasks,
    todoList,
  },
};
</script>
<style lang="scss">
.sorting-close-button {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
