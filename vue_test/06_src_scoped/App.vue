<template>
  <div>
    <MyHero />
    <hr />
    <MyGame />
    <hr />
  </div>
</template>

<script>
import MyHero from "./components/MyHero.vue";
import MyGame from "./components/MyGame.vue";

export default {
  name: "App",

  components: { MyHero, MyGame },
};
</script>

<style>
</style>