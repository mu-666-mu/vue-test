<<template>
  <div class="demo">
  <h1>{{msg}}</h1>
  <h2>游戏名称：{{name}}</h2>
  <h2>公司：{{company}}</h2>

  </div>
</template>

<script>
export default {
  name: "MyHero",
  data() {
    return {
      name: "王者荣耀",
      company: "腾讯",
      msg: "游戏介绍",
    };
  },
};
</script>

<style scoped>
.demo {
  background-color: #45922c;
}
</style>