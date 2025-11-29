<<template>
  <div class="hero">
  <h1>{{msg}}</h1>
  <h2>英雄名称：{{name}}</h2>
  <h2>性别：{{sex}}</h2>
  <h2>英雄职业：{{occupation}}</h2>
  <h2>击杀数：{{kill}}</h2>
  <button @click="sendHeroName">获取英雄名字</button>
  </br>
  <button @click="unbind">解绑getHero事件</button>
  </div>
</template>

<script>
export default {
  name: "MyHero",
  data() {
    return {
      name: "妲己",
      sex: "女",
      msg: "峡谷英雄介绍",
      occupation: "法师",
      kill: 13,
    };
  },
  methods: {
    sendHeroName() {
      this.$emit("getHeroName", this.name);
    },
    unbind() {
      console.log("解绑事件");
      //this.$off("getHeroName");//适用于解绑单个事件
      //this.$off(["getHeroName",]);//适用于解绑单个事件
      this.$off(); //解绑所有事件
    },
  },
};
</script>

<style scoped>
.hero {
  background-color: #7c67d1;
  padding: 5px;
}
</style>