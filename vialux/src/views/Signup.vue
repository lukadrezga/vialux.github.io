<template>
  <div class="about">
    <h1>Ovo je signup stranica</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm-12">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email addresa</label>
              <input
                type="email"
                v-model="username"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Unesi email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                v-model="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Unesi password"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPonovipassword1">Ponovi password</label>
              <input
                type="ponovipassword"
                v-model="ponovljenipassword"
                class="form-control"
                id="exampleInputPonovipassword1"
                placeholder="Ponovi password"
              />
            </div>
            <button type="button" @click="signup" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default {
  name: "Signup",
  data() {
    return {
      username: "",
      password: "",
      ponovljenipassword: "",
    };
  },
  methods: {
    signup() {
      createUserWithEmailAndPassword(auth, this.username, this.password)
        .then((rez) => {
          console.log("Uspješna registracija", rez);
          this.$router.push({ name: "Home" });
        })
        .catch(function (error) {
          console.error("Došlo je do pogreške", error);
        });
    },
  },
};
</script>
