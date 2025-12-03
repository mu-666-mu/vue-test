<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
      />&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "MySearch",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      this.$bus.$emit("updateData", {
        isLoading: true,
        errMsg: "",
        users: [],
        isFirst: false,
      });
      this.$http
        .get(`https://api.github.com/search/users?q=${this.keyWord}`)
        .then(
          (response) => {
            console.log("请求成功");
            this.$bus.$emit("updateData", {
              isLoading: false,
              errMsg: "",
              users: response.data.items,
            });
            console.log("这里是search组件，成功向list组件发送数据");
          },
          (error) => {
            console.log("请求失败");
            this.$bus.$emit("updateData", {
              isLoading: false,
              errMsg: error.message,
              users: [],
            });
          }
        );
    },
  },
};
</script>

<style>
</style>