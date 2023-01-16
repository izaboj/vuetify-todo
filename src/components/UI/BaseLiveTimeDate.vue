<template>
  <div class="text-subtitle-1 ml-4">{{ date }}</div>
</template>

<script>
import { format } from "date-fns";
export default {
  data() {
    return {
      date: null,
    };
  },
  methods: {
    getDate() {
      this.date = format(new Date(), "EEE, d MMMM H:mm:ss");
      setTimeout(this.getDate, 1000);
    },
  },
  mounted() {
    this.getDate();
  },
};
</script>

<style></style>
