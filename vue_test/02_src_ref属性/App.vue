<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom">点我输出上方dom元素</button>
    <MyGame ref="game" />
  </div>
</template>

<script>
import MyGame from "./components/MyGame.vue";

export default {
  name: "App",
  data() {
    return {
      msg: "你好啊，我是fan_yi",
    };
  },
  components: { MyGame },
  methods: {
    showDom() {
      console.log(this.$refs.title); //真实dom元素
      console.log(this.$refs.game); //MyGame组件的实例对象
    },
  },
};
</script>

<style>
</style>