<template>
  <div class="container">
    <h1>Ovdje se nalaze ponuđene ville u Hrvatskoj.</h1>
    <br />
    <div class="row justify-content-center">
      <Kartaville v-for="card in filteredCardes" :key="card.url" :info="card" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Kartaville from "@/components/Kartaville.vue";
import store from "@/store";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

export default {
  name: "Home",
  data: function () {
    return {
      cardes: [],
      store,
      newImageDescription: "",
      newImagePlace: "",
      newImageAdress: "",
      newImageUrl: "",
      imageReference: null,
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      console.log("firebase dohvat...");

      const colRef = collection(db, "ville");

      getDocs(colRef).then((snapshot) => {
        this.cardes = [];
        snapshot.docs.forEach((doc) => {
          const data = doc.data();
          this.cardes.push({
            description: data.desc,
            place: data.place,
            adress: data.adress,
            url: data.url,
          });
        });
      });
    },
  },
  computed: {
    filteredCardes() {
      let termin = this.store.searchTerm;
      return this.cardes.filter(
        (card) => card.description.indexOf(termin) >= 0
      );
    },
  },
  components: {
    Kartaville,
    store,
  },
};
</script>
