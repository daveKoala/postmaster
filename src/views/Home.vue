<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script lang="ts">
import Basic from "@/layouts/basic.vue";
import Vue from "vue";
export default Vue.extend({
  name: "Home",
  data: () => ({}),
  created() {
    this.$emit("update:layout", Basic);
  }
});
</script>
