import Localbase from "localbase";
let db = new Localbase("db");
db.config.debug = false;

export default {
  async addTask(context, payload) {
    let task = {
      id: Date.now(),
      title: payload.taskTitle,
      isDone: false,
      dueDate: null,
    };
    await db.collection("tasks").add(task);
    context.commit("addTask", task);
    context.commit("addSnackBar", payload.snackBarTitle);
  },
  async getTasks(context) {
    let tasks = await db.collection("tasks").get();
    context.commit("updateItems", tasks);
  },
  async updateItems(context, payload) {
    await db.collection("tasks").set(payload);
    context.commit("updateItems", payload);
  },
  async deleteTask(context, payload) {
    let result = await db.collection("tasks").doc({ id: payload.id }).delete();
    if (result.success) {
      context.commit("removeTask", payload.id);
      context.commit("addSnackBar", payload.snackBarTitle);
    } else {
      context.commit("addSnackBar", "Something went wrong");
    }
  },
  async toggleTask(context, payload) {
    let task = context.state.items.filter((item) => payload.id === item.id)[0];
    await db.collection("tasks").doc({ id: payload.id }).update({
      isDone: !task.isDone,
    });
    context.commit("toggleTask", payload.id);
  },
  hideSnackBar(context) {
    context.commit("hideSnackBar");
  },
  async updateTitle(context, payload) {
    await db.collection("tasks").doc({ id: payload.id }).update({
      title: payload.newValue,
    });
    context.commit("updateTitle", payload);
    context.commit("addSnackBar", payload.snackBarTitle);
  },
  async updateDueDate(context, payload) {
    await db.collection("tasks").doc({ id: payload.id }).update({
      dueDate: payload.dueDate,
    });
    context.commit("updateDueDate", payload);
    context.commit("addSnackBar", payload.snackBarTitle);
  },
  setSearch(context, value) {
    context.commit("setSearch", value);
  },
};
