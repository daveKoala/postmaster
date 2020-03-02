<template>
  <v-app>
    <component :is="layout">
      <router-view :layout.sync="layout" :key="$route.fullyQualifiedPath" />
    </component>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    layout: "div"
  })
};
</script>
