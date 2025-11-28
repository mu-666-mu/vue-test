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
      msg: "峡谷英雄介绍",
    };
  },
  //简单声明接收
  //props:['name','sex','occupation','kill']

  //接收同时限制数据类型
  /* props: {
    name: String,
    sex: String,
    occupation: String,
    kill: Number,
  }, */

  //最完整写法
  props: {
    name: {
      type: String, //类型
      required: true, //是否必须
    },
    sex: {
      type: String,
      default: "未知", //默认值
    },
    occupation: {
      type: String,
    },
    kill: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style>
</style>