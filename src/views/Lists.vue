<template>
  <div>
    <div v-if="$store.state.lists">
      <Collection
        v-for="(list, index) in $store.state.lists"
        :key="index"
        :id="index"
        :list="list"
        :tasks="$store.state.tasks"
        style="margin-bottom:10px;"
      />
    </div>
    <div v-else>
      <h1 class="text-center text-danger">Не обнаружено коллекций</h1>
    </div>
  </div>
</template>

<script>
// function DropDown(el) {
//   this.dd = el;
//   this.initEvents();
// }
// DropDown.prototype = {
//   initEvents: function() {
//     var obj = this;

//     obj.dd.on("click", function(event) {
//       $(this).toggleClass("active");
//       event.stopPropagation();
//     });
//   },
// };

// $(function() {
//   var dd = new DropDown($("#dd"));

//   $(document).click(function() {
//     // all dropdowns
//     $(".wrapper-dropdown-5").removeClass("active");
//   });
// });

import Collection from "../components/Collection";
export default {
  components: { Collection },
};
</script>
