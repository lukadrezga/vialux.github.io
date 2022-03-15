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
          </div>
          <div class="col-2"></div>
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
      newImageUrl: "",
      imageReference: null,
    };
  },
  methods: {
    postNewImage() {
      const imageDescription = this.newImageDescription;

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
