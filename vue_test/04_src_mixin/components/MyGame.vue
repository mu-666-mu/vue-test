<<template>
  <div>
  <h1>{{msg}}</h1>
  <h2 @click="showName">游戏名称：{{name}}</h2>
  <h2>公司：{{company}}</h2>

  </div>
</template>

<script>
import { mixin } from "../mixin";
export default {
  name: "MyHero",
  data() {
    return {
      name: "王者荣耀",
      company: "腾讯",
      msg: "游戏介绍",
    };
  },
  //局部混合
  mixins: [mixin],
};
</script>

<style>
</style>