<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import Basic from "@/layouts/basic.vue";
import Vue from "vue";
export default Vue.extend({
  name: "About",
  data: () => ({}),
  created() {
    this.$emit("update:layout", Basic);
  }
});
</script>
