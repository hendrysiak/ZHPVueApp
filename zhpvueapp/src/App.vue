<template>
  <div id="app">
    <div class="logo"></div>
    <h1 class="main__title">Propozycje wymagań na stopnie v0.1</h1>
    <main class="main">
      <Menu class="main__menu" />
      <Dashboard class="main__dashboard" />
    </main>
  </div>
</template>

<script>
import Dashboard from "./components/Dashboard.vue";
import Menu from "./components/Menu.vue";

export default {
  name: "app",
  components: {
    Dashboard,
    Menu
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap&subset=latin-ext");
html {
  font-family: "Roboto", sans-serif;
  color: white;
  background-color: #a6ce39;
}
body {
  height: 100vh;
}
#app {
  height: 100%;
}
.logo {
  margin: 5vh 5vh;
  position: absolute;
  right: 0;
  height: 18vh;
  width: 46vh;
  background-image: url("./assets/logo.png");
  background-size: contain;
  background-repeat: no-repeat;
}
.main {
  height: 70%;
  margin-top: 20vh;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 20% 80%;
  &__dashboard {
    grid-column: 1;
    grid-row: 2;
  }
  &__menu {
    grid-column: 2;
    grid-row: 2;
  }
}
</style>
