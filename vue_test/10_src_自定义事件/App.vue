<template>
  <div class="app">
    <h1>{{ msg }},{{ heroName }}</h1>
    <!-- 父给子组件传递函数类型的props -->
    <MyGame :getGameName="getGameName" />
    <!-- 父给子组件绑定一个自定义事件 使用@或者v-on-->
    <MyHero v-on:getHeroName="getHero" />

    <!-- 父给子组件绑定一个自定义事件 使用ref-->
    <!-- <MyHero ref="hero" /> -->
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
      heroName: "",
    };
  },
  methods: {
    getGameName(gameName) {
      console.log("收到游戏名字", gameName);
    },
    getHero(heroName) {
      console.log("getHero is called", heroName);
      this.heroName = heroName;
    },
  },

  mounted() {
    // this.$refs.hero.$on("getHeroName", this.getHero);
  },
};
</script>

<style scpoed>
.app {
  background-color: #887373;
  padding: 5px;
}
</style>