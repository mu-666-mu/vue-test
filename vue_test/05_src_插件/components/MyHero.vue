<<template>
  <div>
  <h1>{{msg}}</h1>
  <h2>英雄名称：{{name}}</h2>
  <h2>性别：{{sex}}</h2>
  <h2>英雄职业：{{occupation}}</h2>
  <h2>击杀数：{{kill}}</h2>
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
};
</script>

<style>
</style>