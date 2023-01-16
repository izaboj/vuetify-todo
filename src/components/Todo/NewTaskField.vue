<template>
  <v-text-field
    v-model="newTaskText"
    @keyup.enter="addTask"
    @click:append="addTask"
    clearable
    class="pa-4 field-backgroud"
    outlined
    placeholder="Add new task"
  >
    <template v-slot:append>
      <v-icon @click="addTask" :disabled="fieldInvalid"> mdi-plus</v-icon>
    </template>
  </v-text-field>
</template>

<script>
export default {
  data() {
    return {
      newTaskText: "",
    };
  },
  computed: {
    fieldInvalid() {
      return !this.newTaskText;
    },
  },
  methods: {
    addTask() {
      if (!this.fieldInvalid) {
        let payload = {
          taskTitle: this.newTaskText,
          snackBarTitle: "Task added",
        };
        this.$store.dispatch("addTask", payload);
        this.newTaskText = "";
      }
    },
  },
};
</script>
<style lang="scss">
.field-backgroud.v-input--is-focused {
  .v-input__slot {
    background: rgba(40, 113, 147, 0.49) !important;
  }
}
</style>
