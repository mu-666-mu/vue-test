<<template>
  <div class="hero">
  <h1>{{msg}}</h1>
  <h2>英雄名称：{{name}}</h2>
  <button @click="sendHeroName">把英雄名传给MyGame.vue</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "MyHero",
  data() {
    return {
      name: "妲己",
      msg: "峡谷英雄介绍",
      occupation: "法师",
    };
  },
  methods: {
    sendHeroName() {
      //this.$bus.$emit("heroName", this.name);
      pubsub.publish("heroName", this.name);
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