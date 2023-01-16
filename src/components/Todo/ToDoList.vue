<template>
  <div>
    <v-list class="pt-0" flat>
      <draggable v-model="items" handle=".handle">
        <div v-for="item in items" :key="item.id">
          <task-item :item="item"></task-item>

          <v-divider></v-divider>
        </div>
      </draggable>
    </v-list>
    <!-- <div v-if="items.isEmpty()">no searching task</div> -->
  </div>
</template>

<script>
import taskItem from "@/components/Todo/TaskItem.vue";
import draggable from "vuedraggable";
export default {
  name: "ToDoList",
  components: {
    taskItem,
    draggable,
  },
  computed: {
    items: {
      get() {
        return this.$store.getters.tasksFiltered;
      },
      set(value) {
        // this.$store.commit("updateItems", value);
        this.$store.dispatch("updateItems", value);
      },
    },
  },
};
</script>
