<template>
  <div class="about">
    <h1>Ovdje će se nalaziti ville u Hrvatskoj.</h1>
    <section class="content-inside-grey">
      <div class="container">
        <div class="row">
          <div class="col-10">
            <form @submit.prevent="postNewImage" class="mb-5">
              <div class="form-group">
                <croppa
                  :width="400"
                  :height="400"
                  placeholder="Učitaj sliku..."
                  v-model="imageReference"
                ></croppa>
              </div>
              <div class="form-group">
                <label for="imageDescription">Description</label>
                <input
                  v-model="newImageDescription"
                  type="text"
                  class="form-control ml-2"
                  placeholder="Enter the image description"
                  id="imageDescription"
                />
              </div>
              <button type="submit" class="btn btn-primary ml-2">
                Post image
              </button>
            </form>
            <Kartaville
              v-for="card in filteredCardes"
              :key="card.url"
              :info="card"
            />
          </div>
          <div class="col-2"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Kartaville from "@/components/Kartaville.vue";
import store from "@/store";
import { db, storage } from "@/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { getDatabase, push, set, ref as dbRef } from "firebase/database";

//cardes = [
//  {
//    url: "https://croatia-exclusive.com/storage/app/uploads/public/607/d29/a1a/607d29a1a063e381169397.jpg",
//    description: "Villa Frida",
//  },
//  {
//    url: "https://www.myistria.com/UserDocsImages/app/objekti/1679/slika_hd/21012022091409_Villa-near-Umag-Villa-Stancija-Baracija%2079.jpg",
//    description: "Villa Stancija Baracija",
//  },
//];

export default {
  name: "Home",
  data: function () {
    return {
      cardes: [],
      store,
      newImageDescription: "",
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
        snapshot.docs.forEach((doc) => {
          const data = doc.data();
          this.cardes.push({
            description: data.desc,
            url: data.url,
          });
        });
      });
    },
    postNewImage() {
      console.log("Ok");

      this.imageReference.generateBlob((blobData) => {
        console.log(blobData);

        let imageName = store.currentUser + "_" + Date.now() + ".png";
        const storageRef = ref(storage, "files/" + files.name);

        const database = getDatabase();
        const databaseReference = dbRef(database, "files");

        uploadBytes(storageRef, files).then(function (snapshot) {
          var newFileRef = push(databaseReference);

          set(newFileRef, {
            name: files.name,
          });
        });
      });

      return;

      const imageDescription = this.newImageDescription;

      try {
        const docRef = addDoc(collection(db, "ville"), {
          url: imageUrl,
          desc: imageDescription,
          email: store.currentUser,
        });
        console.log("Spremljeno", docRef);
        this.newImageDescription = "";
        this.newImageUrl = "";

        this.getPosts();
      } catch (e) {
        console.error("Pogreška", e);
      }
    },
  },
  computed: {
    filteredCardes() {
      let termin = this.store.searchTerm;
      return this.cardes.filter((card) => card.description.includes(termin));
    },
  },
  components: {
    Kartaville,
    store,
  },
};
</script>
