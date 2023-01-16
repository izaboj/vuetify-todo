export default {
  addTask(state, task) {
    state.items.push(task);
  },
  removeTask(state, id) {
    state.items = state.items.filter((item) => id !== item.id);
  },
  toggleTask(state, id) {
    let task = state.items.filter((item) => id === item.id)[0];
    task.isDone = !task.isDone;
  },
  updateTitle(state, payload) {
    let idx = state.items.findIndex((item) => item.id === payload.id);
    state.items[idx].title = payload.newValue;
  },
  updateDueDate(state, payload) {
    let task = state.items.filter((item) => payload.id === item.id)[0];
    task.dueDate = payload.dueDate;
  },
  updateItems(state, payload) {
    state.items = payload;
  },
  addSnackBar(state, text) {
    let timeout = 0;
    if (state.snackbar.show) {
      state.snackbar.show = false;
      timeout = 300;
    }
    setTimeout(() => {
      state.snackbar.show = true;
      state.snackbar.text = text;
    }, timeout);
  },
  hideSnackBar(state) {
    state.snackbar.show = false;
  },
  setSearch(state, input) {
    state.searchInput = input;
    // state.items =
  },
  toggleSorting(state) {
    state.sorting = !state.sorting;
  },
};
