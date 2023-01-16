<template>
  <v-text-field
    :value="$store.state.searchInput"
    @input="setSearch($event)"
    class="expanding-search mt-1"
    :class="{ closed: !isOpen && !$store.state.searchInput }"
    @focus="isOpen = true"
    @blur="isOpen = false"
    placeholder="Search"
    prepend-inner-icon="mdi-magnify"
    clearable
    dense
    filled
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    setSearch(value) {
      this.$store.dispatch("setSearch", value);
    },
  },
};
</script>

<style lang="scss">
.expanding-search {
  transition: max-width 0.5s ease-in-out;
  .v-input__slot {
    &::before,
    &::after {
      // border-color: red !important;
      border: none !important;
    }
  }
}
.expanding-search {
  &.closed {
    max-width: 45px;
    .v-input__slot {
      background: none !important;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
>
