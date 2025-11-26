<template>
  <div class="demo">
    <h2>游戏信息</h2>
    <h3>游戏名称：{{ gameName }}</h3>
    <h3>所属公司：{{ company }}</h3>
    <button @click="showName">点我提示游戏名</button>
  </div>
</template>

<script>
export default {
  name: "MyGame",
  data() {
    return {
      gameName: "王者荣耀",
      company: "腾讯",
    };
  },
  methods: {
    showName() {
      alert(this.gameName);
    },
  },
};
</script>

<style>
.demo {
  background-color: aquamarine;
}
</style>