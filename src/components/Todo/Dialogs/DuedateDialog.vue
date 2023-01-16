<template>
  <v-dialog
    ref="dialog"
    :value="true"
    :return-value.sync="date"
    persistent
    width="290px"
  >
    <v-date-picker v-model="date" scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="$emit('close')"> Cancel </v-btn>
      <v-btn text color="primary" @click="saveDate"> OK </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  props: ["task"],
  data() {
    return {
      date: null,
    };
  },
  mounted() {
    if (this.task.dueDate) {
      this.date = this.task.dueDate;
    }
  },
  methods: {
    saveDate() {
      let payload = {
        id: this.task.id,
        dueDate: this.date,
        snackBarTitle: "Due date has been updated",
      };
      this.$store.dispatch("updateDueDate", payload);
      this.$emit("close");
    },
  },
};
</script>

<style></style>
