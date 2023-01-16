export default {
  tasksFiltered(state) {
    if (!state.searchInput) {
      return state.items;
    }
    return state.items.filter((item) =>
      item.title.toLowerCase().includes(state.searchInput.toLowerCase())
    );
  },
};
