<<template>
  <div class="game">
  <h2>游戏名称：{{name}}</h2>
  <h2>游戏公司：{{company}}</h2>
  </div>
</template>

<script>
export default {
  name: "MyGame",
  data() {
    return {
      name: "王者荣耀",
      company: "腾讯",
    };
  },
};
</script>

<style>
.game {
  background-color: #c8ab06;
}
</style>