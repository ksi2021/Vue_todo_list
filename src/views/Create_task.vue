<template>
  <div class="create_task">
    <link
      rel="stylesheet"
      href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"
    />
    <link rel="stylesheet" href="/resources/demos/style.css" />
    <div class="container border p-3 border-primary rounded bg-light">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Задача</label>
          <input
            v-model="task.name"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Задача"
          />
        </div>
        <div>
          <label class="form-check-label " for="dt"> Выбор даты </label>
          <Datepicker
            ref="datapicker"
            class="form-check-input ml-0"
            id="dt"
          ></Datepicker>
        </div>

        <div class="form-check">
          <input
            v-model="task.is_quickly"
            class="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck1"
          />
          <label class="form-check-label mb-3" for="defaultCheck1">
            Срочно
          </label>
        </div>

        <button
          type="button"
          @click="create_task"
          class="btn btn-block btn-primary"
        >
          Создать
        </button>
      </form>
    </div>
  </div>
</template>

<style>
.vdp-datepicker input {
  cursor: pointer;
  display: block;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 700;
  color: #444;
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: 100%;
  max-width: 250px;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 0.5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url("https://img.icons8.com/color/48/000000/calendar.png"),
    linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  /* background-image: url(""), linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);  */
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 2em auto, 100%;
}
</style>

<script>
import Datepicker from "vuejs-datepicker";
export default {
  data() {
    return {
      task: {
        name: "",
        date: "",
        l_id: "",
        t_id: "",
        complete: false,
        is_quickly: false,
      },
    };
  },
  methods: {
    create_task() {
      if (
        this.task.name.replace(/ +/g, " ").trim() &&
        this.$refs.datapicker.$el.querySelector("input").value != "undefined"
      ) {
        this.task.t_id = Date.now();
        this.task.date = this.$refs.datapicker.$el.querySelector("input").value;
        this.$store.dispatch("Add_task", this.task);
        setTimeout(() => {
          document.location.reload();
        }, 50);
      }
    },
    ret_dat() {
      var tomorrow = new Date();
      tomorrow.setDate(new Date().getDate() + 1);
      return tomorrow;
    },
  },
  created() {
    this.ret_dat();
  },
  components: { Datepicker },
};
</script>
