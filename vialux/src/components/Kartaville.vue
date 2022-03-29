<template>
  <div class="card" style="width: 300px">
    <img :src="info.url" class="card-img-top" alt="..." />
    <div class="card-body">
      <p class="card-text">
        {{ info.description }}
      </p>
      <p class="card-text">
        {{ info.place }}
      </p>
      <p class="card-text">
        {{ info.adress }}
      </p>
      <router-link
        to="/rezervacija"
        v-if="store.currentUser"
        type="button"
        class="btn btn-primary"
        data-toggle="button"
        aria-pressed="false"
        autocomplete="off"
        style="float: right"
      >
        Rezervacija
      </router-link>
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  padding: 16px;
  text-align: left;
  background-color: #f1f1f1;
  margin-bottom: 30px;
  margin-right: 20px;
}

/* Responsive columns - one column layout (vertical) on small screens */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 30px;
  }
}
</style>

<script>
import store from "@/store";

export default {
  name: "Kartaville",
  props: ["info"],
  data() {
    return {
      store,
    };
  },
};
</script>
