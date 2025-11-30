<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <MyGame />
    <MyHero />
  </div>
</template>

<script>
import MyHero from "./components/MyHero.vue";
import MyGame from "./components/MyGame.vue";

export default {
  name: "App",
  components: { MyHero, MyGame },
  data() {
    return {
      msg: "你好啊",
    };
  },
};
</script>

<style scpoed>
.app {
  background-color: #887373;
  padding: 5px;
}
</style>