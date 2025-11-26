<template>
  <div>
    <h2>英雄信息</h2>
    <h3>英雄名称：{{ heroName }}</h3>
    <h3>英雄职业：{{ occupation }}</h3>
  </div>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      heroName: "蔡文姬",
      occupation: "辅助",
    };
  },
};
</script>

<style>
.demo {
  background-color: aquamarine;
}
</style>