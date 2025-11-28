<template>
  <div>
    <MyHero name="李白" occupation="打野" :kill="8" />
    <hr />
    <MyHero />
    <hr />
    <MyHero />
    <hr />
  </div>
</template>

<script>
import MyHero from "./components/MyHero.vue";

export default {
  name: "App",

  components: { MyHero },
};
</script>

<style>
</style>