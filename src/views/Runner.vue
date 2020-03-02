<template>
  <div class="runner">
    <v-btn @click="sendRequest">Send</v-btn>
    <v-sheet>
      <pre id="json">{{ response }}</pre>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import Basic from "@/layouts/basic.vue";
import Vue from "vue";
export default Vue.extend({
  name: "About",
  data: () => ({
    url: "https://test-strata2-api.cirrus-connect.com/sample/secure-echo/",
    requestType: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1rTkZPVFJGUmpFNU9FWkRSRVZFTTBJMU1UQkRSRGhFT1RnMFFqRkNOMEV3UVRoQlJUZEVRZyJ9.eyJpc3MiOiJodHRwczovL2NpcnJ1cy1jb25uZWN0LmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1YzhmYzQzMDAyZDdhZDAxNzBiYTc2NmYiLCJhdWQiOlsiaHR0cDovL3N0cmF0YS12Mi5hcGlzIiwiaHR0cHM6Ly9jaXJydXMtY29ubmVjdC5ldS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNTgzMTU4NDEwLCJleHAiOjE1ODMyNDQ4MTAsImF6cCI6Ijk1QnRLRVk2ZVdoZXR2dlNEQVlENXhwbFF0b3poQnVwIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBzdHJhdGEtdjI6dXNlciIsImd0eSI6InBhc3N3b3JkIn0.0-PpsjI11OBCWNeMb8JQntMGwFH6i1iE0vh1LuKoB6C98ys458GW9EiI4UrWgAH7D7GdhmLZtdgp7LrUIGD2CF6J5VisPJiFifEyNBxhq1c9jI-NBJVZH2GOWWlpcricJFoqwQM52Da2bhl-9ljS3S-a7_M2TzhX-ea04oFuh08-QJJb7iJXwsKGZjEIBS7aMCmVzFwZYcBQAfSLAIyW-2e9pSJzsEefwIC-njACUaw4u0sjCIb1k9FhxXE8xbwW78YcuPS2a2gvqa5uhDT6XlYECo5Fm81ABGMVriUZxDZ72wjjrc448d6PfGszKle_9dJDr1qwAdZyxfTkgUUYAw"
    },
    response: null
  }),
  created() {
    this.$emit("update:layout", Basic);
  },
  methods: {
    async sendRequest() {
      try {
        const response = await fetch(this.url, {
          headers: this.headers,
          method: "GET",
          cache: "no-cache"
        });
        this.response = await response.json();
      } catch (err) {
        /*eslint-disable */
        console.error(err);
      }
    }
  }
});
</script>
