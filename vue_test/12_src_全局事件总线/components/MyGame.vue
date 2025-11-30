<<template>
  <div class="game">
  <h1>{{msg}}</h1>
  <h2>游戏名称：{{name}}</h2>
  <h2>公司：{{company}}</h2>
  <h2>代表英雄：{{heroName}}</h2>
  </div>
</template>

<script>
export default {
  name: "MyHero",
  props: ["getGameName"],
  data() {
    return {
      name: "王者荣耀",
      company: "腾讯",
      msg: "游戏介绍",
      heroName: "",
    };
  },
  mounted() {
    this.$bus.$on("heroName", (data) => {
      console.log("我是game组件，收到了数据", data);
      this.heroName = data;
    });
  },
  beforDestroy() {
    this.$bus.$off("hello");
  },
};
</script>

<style scoped>
.game {
  background-color: #45922c;
  padding: 5px;
  margin-top: 50px;
}
</style>