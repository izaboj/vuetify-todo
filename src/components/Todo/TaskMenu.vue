<template>
  <div>
    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="handleClick(i)"
          :disabled="$store.state.searchInput && item.title === 'Sort'"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <delete-dialog
      :task="task"
      v-if="dialogs.delete"
      @close="dialogs.delete = false"
    ></delete-dialog>
    <duedate-dialog
      :task="task"
      v-if="dialogs.duedate"
      @close="dialogs.duedate = false"
    ></duedate-dialog>
    <edit-dialog
      :task="task"
      v-if="dialogs.edit"
      @close="dialogs.edit = false"
    ></edit-dialog>
  </div>
</template>

<script>
import deleteDialog from "@/components/Todo/Dialogs/DeleteDialog.vue";
import editDialog from "@/components/Todo/Dialogs/EditDialog.vue";
import duedateDialog from "@/components/Todo/Dialogs/DuedateDialog.vue";
export default {
  props: ["task"],
  components: {
    deleteDialog,
    editDialog,
    duedateDialog,
  },
  data: () => ({
    dialogs: {
      delete: false,
      edit: false,
      duedate: false,
    },
    items: [
      {
        title: "Edit",
        icon: "mdi-pencil",
        action() {
          this.dialogs.edit = true;
        },
      },
      {
        title: "Due date",
        icon: "mdi-calendar",
        action() {
          console.log("due");
          this.dialogs.duedate = true;
        },
      },
      {
        title: "Delete",
        icon: "mdi-delete",
        action() {
          console.log("delete");
          this.dialogs.delete = true;
        },
      },
      {
        title: "Sort",
        icon: "mdi-drag-horizontal-variant",
        action() {
          console.log("Sort");
          this.$store.commit("toggleSorting");
        },
      },
    ],
  }),
  methods: {
    handleClick(index) {
      this.items[index].action.call(this);
    },
  },
};
</script>

<style></style>
