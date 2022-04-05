<template>
  <div class="about">
    <h1>Ovdje se nalazi forma za unos villa u aplikaciju.</h1>
    <br />
    <p>
      Iako je forma vidljiva svima, ovu formu mogu koristiti samo administratori
      ove stranice i onima kojima je odobreno od strane administratora. Bilo
      kakva dodavanja villa od strane osobe kojima nije odobreno, biti će
      <strong><u> OBRISANA </u></strong> , a account blokiran!
    </p>
    <br />
    <section class="content-inside-grey">
      <div class="container">
        <div class="row">
          <div class="col-sm">
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
              <div class="form-group">
                <label for="imagePlace">Place</label>
                <input
                  v-model="newImagePlace"
                  type="text"
                  class="form-control ml-2"
                  placeholder="Enter the image place"
                  id="imagePlace"
                />
              </div>
              <div class="form-group">
                <label for="imageAdress">Adress</label>
                <input
                  v-model="newImageAdress"
                  type="text"
                  class="form-control ml-2"
                  placeholder="Enter the image adress"
                  id="imageAdress"
                />
              </div>
              <br />
              <button type="submit" class="btn btn-primary ml-2">
                Post image
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store";
import { db, storage } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export default {
  name: "Home",
  data: function () {
    return {
      store,
      newImageDescription: "",
      newImagePlace: "",
      newImageAdress: "",
      newImageUrl: "",
      imageReference: null,
    };
  },
  methods: {
    postNewImage() {
      const imageDescription = this.newImageDescription;
      const imagePlace = this.newImagePlace;
      const imageAdress = this.newImageAdress;

      this.imageReference.generateBlob((blobData) => {
        const imageName = store.currentUser + "_" + Date.now() + ".png";
        const storageRef = ref(storage);
        const imageRef = ref(
          storageRef,
          "slike_villa/" + blobData.name + imageName
        );

        uploadBytes(imageRef, blobData)
          .then((snapshot) => {
            getDownloadURL(ref(storage, imageRef))
              .then((url) => {
                console.log("Javni link", url);
                var docRef = addDoc(collection(db, "ville"), {
                  url: url,
                  desc: imageDescription,
                  place: imagePlace,
                  adress: imageAdress,
                  email: store.currentUser,
                });
                console.log("Spremljeno", docRef);
              })
              .catch((e) => {
                console.error(e);
              });
            console.log("Uploaded a file");
          })
          .catch((e) => {
            console.error(e);
          });
      });
    },
  },
  components: {
    store,
  },
};
</script>

<style>
.container {
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
