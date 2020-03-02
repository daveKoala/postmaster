<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <slot />
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 20120</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    items: [
      { icon: "mdi-view-dashboard", title: "Home", to: "/home" },
      { icon: "mdi-account-group", title: "About", to: "/about" },
      { icon: "mdi-home-group", title: "Runner", to: "/runner" },
      // { icon: "mdi-map-clock-outline", title: "Journey", to: "/journey" },
      // { icon: "mdi-file-chart", title: "Reporting", to: "/reporting" },
      // { icon: "mdi-domain", title: "Organisations", to: "/organisations" },
    ],
  }),
});
</script>
