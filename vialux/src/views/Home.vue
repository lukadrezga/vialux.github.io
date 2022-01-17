<template>
  <div class="container">
    <div class="row">
      <div class="col-5">
        <kartaville />
      </div>
      <div class="col-2"></div>
      <div class="col-5">
        <kartaville />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Kartaville from "@/components/Kartaville.vue";
import store from "@/store";

let hello = "Ovdje upisati nešto";

export default {
  name: "Home",
  data: function () {
    return {
      hello,
      store,
    };
  },
  computed: {},
  components: {
    Kartaville,
  },
};
</script>
