<template>
  <div>
    <h1>User List</h1>
    <div v-for="(value, key) in users" :key="key">{{ key }} :{{ value }}</div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      users: {},
    };
  },
  methods: {
    async dataType() {
      const response = await axios.get("https://api.genderize.io/?name=luc");
      this.users = response.data;
    },
  },
  mounted() {
    this.dataType();
  },
};
</script>
