<template>
  <div id="app">
    <NavBar v-if="this.$route.name != 'error'" />

    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: "app",
  data: function() {
    return {};
  },
  components: { NavBar },
  created(){
    this.$store.dispatch("get_all_tasks");
     this.$store.dispatch("get_all_lists");
     
  }
};
</script>
