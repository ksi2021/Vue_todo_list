<template>
  <div class="hello">
    <div
      class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow"
    >
      <h5 class="my-0 mr-md-auto font-weight-normal text-primary">
        <i class="fab fa-vuejs"></i>&nbsp;To-do List
      </h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" href="/#/">Задачи</a>
        <a class="p-2 text-dark" href="/#/collestions">Коллекции</a>
      </nav>
      <div class="btn-group dropleft">
        <button
          class="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Создать
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        
          <a class="dropdown-item" href="/#/create_task">Задачу</a>
          <a class="dropdown-item" href="/#/create_list">Коллекцию</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
