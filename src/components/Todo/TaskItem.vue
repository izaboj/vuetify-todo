<template>
  <div>
    <v-list-item
      @click="toggleStatus(item.id)"
      :class="{
        'primary lighten-4': item.isDone,
      }"
      :ripple="false"
      class="white"
    >
      <template v-slot:default>
        <v-list-item-action>
          <v-checkbox :input-value="item.isDone" color="primary"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': item.isDone }"
            >{{ item.title }}</v-list-item-title
          >
        </v-list-item-content>
        <v-list-item-action>
          <v-list-item-action-text v-if="item.dueDate">
            <v-icon small> mdi-calendar </v-icon>
            {{ item.dueDate | formatDate }}
          </v-list-item-action-text>
        </v-list-item-action>
        <v-list-item-action>
          <task-menu :task="item"></task-menu>
        </v-list-item-action>
        <v-list-item-action v-if="$store.state.sorting">
          <v-btn icon color="primary" class="handle">
            <v-icon> mdi-drag-horizontal-variant </v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
  </div>
</template>

<script>
import taskMenu from "@/components/Todo/TaskMenu.vue";
import { format } from "date-fns";
export default {
  name: "TaskItem",
  props: ["item"],
  components: {
    taskMenu,
  },
  filters: {
    formatDate(date) {
      return format(new Date(date), "MMM d");
    },
  },
  methods: {
    toggleStatus(id) {
      this.$store.dispatch("toggleTask", { id: id });
    },
  },
};
</script>

<style lang="scss">
.sortable-ghost {
  // visibility: hidden;
  opacity: 0;
}
.sortable-drag {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
</style>
