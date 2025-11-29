<<template>
  <div class="game">
  <h1>{{msg}}</h1>
  <h2>游戏名称：{{name}}</h2>
  <h2>公司：{{company}}</h2>
  <button @click='sendGameName'>提交游戏名</button>
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
    };
  },
  methods: {
    sendGameName() {
      this.getGameName(this.name);
    },
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