<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="moveTest" appear>
      <h1 v-show="isShow">你好啊，我是fan_yi</h1>
    </transition>
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
  background-color: #1799bc;
}

.moveTest-enter-active {
  animation: fanyi 1s;
}

.moveTest-leave-active {
  animation: fanyi 1s reverse;
}

@keyframes fanyi {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>>

