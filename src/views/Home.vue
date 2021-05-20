<template>
  <div
    class="home container bg-light p-3"
    v-if="
      $store.state.tasks &&
        $store.state.tasks.find(
          (element) =>
            element.l_id == '' && new Date(element.date) - new Date() > 0
        )
    "
  >
    <button class="btn btn-primary mb-3" v-on:click="sort_by_pr()">
      Сортировать по приоритету
    </button>

    <div v-for="(task, index) in $store.state.tasks" :key="index">
      <Tek
        v-if="task.l_id == '' && new Date(task.date) - new Date() > 0"
        :task1="task"
        :lists="$store.state.lists"
        :is_sorted="get_sort"
      />
    </div>
  </div>
  <div v-else>
    <h1 class="text-center text-danger">Не обнаружено задач</h1>
  </div>
</template>

<script>
import Tek from "../components/Task";

export default {
  name: "Home",
  data() {
    return {
      is_sort: false,
    };
  },
  components: { Tek },
  methods: {
    sort_by_pr() {
      if (this.$store.state.tasks) {
        this.is_sort = true;
        this.$store.state.tasks.sort((a, b) =>
          +a.is_quickly < +b.is_quickly ? 1 : -1
        );
      }
    },
  },
  computed: {
    get_sort() {
      return this.is_sort;
    },
  },
};
</script>
