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

export default {
  name: "Home",
  components: {
    Kartaville,
  },
};
</script>
