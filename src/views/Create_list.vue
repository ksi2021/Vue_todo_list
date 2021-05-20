<template>
  <div class="create_task">
    <link
      rel="stylesheet"
      href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"
    />
    <div class="container border p-3 border-primary rounded bg-light">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Название коллекции</label>
          <input
            v-model="list.name"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Название коллекции"
          />
        </div>

        <button type="button" @click="send" class="btn btn-block btn-primary">
          Создать
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: {
        name: "",
        l_id: "",
      },
    };
  },
  methods: {
    send() {
      if (this.list.name.replace(/ +/g, " ").trim()) {
        this.list.l_id = Date.now();

        this.$store.dispatch("Add_list", this.list);
        document.location.reload();
      }
    },
  },
};
</script>
