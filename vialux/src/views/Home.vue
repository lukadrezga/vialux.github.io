<template>
  <div class="container">
    <div class="row d-flex">
      <div class="col">
        <h1>{{ hello }}</h1>
        <Kartaville
          v-for="card in filteredCards"
          :key="card.url"
          :info="card"
        />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Kartaville from "@/components/Kartaville.vue";
import store from "@/store";

let hello = "Dobro došli na stranicu VIALUX!";

let cards = [];

cards = [
  {
    url: "https://croatia-exclusive.com/storage/app/uploads/public/607/d29/a1a/607d29a1a063e381169397.jpg",
    description: "Villa Frida",
    place: "Mjesto: Vabriga",
    adress: "Adresa: Lovarska ulica",
  },
  {
    url: "https://www.myistria.com/UserDocsImages/app/objekti/1679/slika_hd/21012022091409_Villa-near-Umag-Villa-Stancija-Baracija%2079.jpg",
    description: "Villa Stancija Baracija",
    place: "Mjesto: Buje",
    adress: "Adresa: Baredine",
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
      return this.cards.filter((card) => card.description.indexOf(termin) >= 0);
    },
  },
  components: {
    Kartaville,
  },
};
</script>
