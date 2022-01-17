<template>
  <div class="about">
    <h1>Ovdje će se nalaziti ville u Hrvatskoj.</h1>
    <section class="content-inside-grey">
      <div class="container">
        <div class="row">
          <div class="col">
            <Kartaville />
            <br /><br />
            <Kartaville />
          </div>
          <div class="col">
            <Kartaville />
            <br /><br />
            <Kartaville />
          </div>
          <div class="col">
            <Kartaville />
            <br /><br />
            <Kartaville />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Kartaville from "@/components/Kartaville.vue";
import store from "@/store";

export default {
  name: "Home",
  components: {
    Kartaville,
    store,
  },
};
</script>
