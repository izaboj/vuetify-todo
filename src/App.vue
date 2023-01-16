<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" mobile-breakpoint="768" app>
      <v-img
        src="todo-list.jpg"
        height="150"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ><div class="pa-4">
          <v-avatar size="68">
            <img src="avatar.jpg" alt="Iza" />
          </v-avatar>

          <div class="text-subtitle-1 font-weight-bold mt-3 white--text">
            Iza
          </div>
          <div class="text-subtitle-2 white--text">Developer</div>
        </div>
      </v-img>
      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      class="pt-2"
      prominent
      dark
      src="todo-list.jpg"
      :height="$route.path === '/home' ? '230' : '150'"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.9), rgba(128,208,199,.9)"
        ></v-img>
      </template>
      <v-container class="pa-0 no-max-width">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <base-search />
        </v-row>
        <v-row>
          <v-toolbar-title class="text-h4 ml-4">{{
            $store.state.appTitle
          }}</v-toolbar-title>
        </v-row>
        <v-row>
          <base-live-time-date />
        </v-row>
        <v-row v-if="$route.path === '/home'">
          <new-task-field />
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main light>
      <router-view />
      <base-snackbar />
    </v-main>
  </v-app>
</template>

<script>
import baseSnackbar from "@/components/UI/BaseSnackbar.vue";
import baseSearch from "@/components/UI/BaseSearch.vue";
import baseLiveTimeDate from "@/components/UI/BaseLiveTimeDate.vue";
import newTaskField from "@/components/Todo/NewTaskField.vue";
export default {
  components: {
    baseSnackbar,
    baseSearch,
    baseLiveTimeDate,
    newTaskField,
  },
  data() {
    return {
      drawer: null,
      items: [
        { title: "To Do", icon: "mdi-format-list-checks", link: "/home" },
        { title: "About", icon: "mdi-help-box", link: "/about" },
      ],
    };
  },
  mounted() {
    console.log(this.$route);
    this.$store.dispatch("getTasks");
  },
};
</script>
<style lang="scss">
.no-max-width {
  max-width: none !important;
}
</style>
