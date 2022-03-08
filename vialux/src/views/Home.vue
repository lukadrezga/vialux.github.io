<template>
  <div class="container">
    <div class="row">
      <div class="col-9">
        {{ hello }}
        <kartaville
          v-for="card in filteredCards"
          :key="card.url"
          :info="card"
        />
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Kartaville from "@/components/Kartaville.vue";
import store from "@/store";

let hello = "Ovdje upisati nešto";

let cards = [];

cards = [
  {
    url: "https://croatia-exclusive.com/storage/app/uploads/public/607/d29/a1a/607d29a1a063e381169397.jpg",
    description: "Villa Frida",
  },
  {
    url: "https://www.myistria.com/UserDocsImages/app/objekti/1679/slika_hd/21012022091409_Villa-near-Umag-Villa-Stancija-Baracija%2079.jpg",
    description: "Villa Stancija Baracija",
  },
];

export default {
  name: "Home",
  data: function () {
    return {
      hello,
      cards,
      store,
    };
  },
  computed: {
    filteredCards() {
      let termin = this.store.searchTerm;
      return this.cards.filter((card) => card.description.includes(termin));
    },
  },
  components: {
    Kartaville,
  },
};
</script>
