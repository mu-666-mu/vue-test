<template>
  <div>
    <img src="./assets/logo.png" alt="logo" />
    <MyGame></MyGame>
    <MyHero />
  </div>
</template>

<script>
import MyGame from "./components/Game.vue";
import MyHero from "./components/Hero.vue";
export default {
  name: "App",
  components: {
    MyGame,
    MyHero,
  },
};
</script>

<style>
</style>