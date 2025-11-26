<template>
  <div>
    <Game></Game>
    <Hero />
  </div>
</template>

<script>
import Game from "./Game.vue";
import Hero from "./Hero.vue";
export default {
  components: { Game },
  name: App,
  comments: {
    Game,
    Hero,
  },
};
</script>

<style>
</style>