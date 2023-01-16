<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> Deleting the task </v-card-title>
      <v-card-text>Are you sure you want to delete the task?</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="" text @click="$emit('close')"> NO </v-btn>
        <v-btn color="red darken-1" text @click="removeItem(task.id)">
          YES
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["task"],
  data() {
    return {
      dialog: true,
    };
  },
  methods: {
    removeItem(id) {
      let payload = {
        id: id,
        snackBarTitle: "Task has been removed",
      };
      this.$store.dispatch("deleteTask", payload);
    },
  },
};
</script>
