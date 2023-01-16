<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> Editing the task </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="taskText"
          @keyup.enter="updateItem"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="" text @click="$emit('close')">CANCEL </v-btn>
        <v-btn
          color="red darken-1"
          text
          @click="updateItem"
          :disabled="taskTextInvalid"
        >
          SAVE
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
      taskText: "",
    };
  },
  computed: {
    taskTextInvalid() {
      return !this.taskText || this.task.title === this.taskText;
    },
  },
  methods: {
    updateItem() {
      if (!this.taskTextInvalid) {
        let payload = {
          id: this.task.id,
          newValue: this.taskText,
          snackBarTitle: "The task has been updated",
        };
        this.$store.dispatch("updateTitle", payload);
        this.$emit("close");
        this.$vuetify.goTo(0, { duration: 0 });
      }
    },
  },
  mounted() {
    this.taskText = this.task.title;
  },
};
</script>
