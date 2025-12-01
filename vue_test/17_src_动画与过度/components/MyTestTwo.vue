<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group name="test" appear>
      <h1 v-show="isShow" key="1">你好啊，我是fan_yi</h1>
      <h1 v-show="!isShow" key="2">fan_yi，你好</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: #13ce57;
}

/* 进入的起点,离开的终点 */
.test-enter,
.test-leave-to {
  transform: translateX(-100%);
}
.test-enter-active,
.test-leave-active {
  transition: 1s linear;
}
/* 进入的终点，离开的起点*/
.test-enter-to,
.test-leave {
  transform: translateX(0);
}
</style>>

