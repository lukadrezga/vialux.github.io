<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">
        <img
          src="@/assets/vialux.png"
          alt=""
          height="50"
          class="d-inline-block align-text-top"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Početna</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ville" class="nav-link">Ville</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/kontakt" class="nav-link">Kontakt</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/o nama" class="nav-link">O nama</router-link>
          </li>
          <li v-if="!store.currentUser" class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li v-if="!store.currentUser" class="nav-item">
            <router-link to="/signup" class="nav-link">Signup</router-link>
          </li>
          <li v-if="store.currentUser" class="nav-item">
            <a href="#" @click="logout()" class="nav-link">Logout</a>
          </li>
          <li v-if="store.currentUser" class="nav-item">
            <router-link to="/admin" class="nav-link">Admin</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input
            v-model="store.searchTerm"
            class="form-control me-2"
            type="search"
            placeholder="Pretraga"
            aria-label="Pretraga"
          />
        </form>
      </div>
    </nav>
    <div class="conatiner">
      <router-view />
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { auth } from "@/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import router from "@/router";

auth.onAuthStateChanged((user) => {
  const currentRoute = router.currentRoute;

  console.log("PROVJERA STANJA LOGINA");
  if (user) {
    // User is signed in.
    console.log("***", user.email);
    store.currentUser = user.email;
  } else {
    console.log("*** No user");
    store.currentUser = null;

    if (currentRoute.meta.needsUser) {
      router.push({ name: "login" });
    }
  }
});

export default {
  name: "app",
  data() {
    return {
      store,
    };
  },
  methods: {
    logout() {
      auth.signOut().then(() => {
        this.$router.push({ name: "Login" });
      });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0a0e11;
}

#nav {
  padding: 30px;
  background-color: white !important;

  a {
    font-weight: bold;
    color: #3083d6;

    &.router-link-exact-active {
      color: #070a09;
    }
  }
}
</style>
