<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />

      <span v-show="!todo.isEdit">{{ todo.name }}</span>

      <input
        v-show="todo.isEdit"
        type="text"
        :value="todo.name"
        @blur="requestBlur(todo, $event)"
        ref="inputName"
      />
    </label>

    <button class="btn btn-danger" @click="requestDelete(todo.id)">删除</button>

    <button
      v-show="!todo.isEdit"
      class="btn btn-edit"
      @click="requestEdit(todo)"
    >
      编辑
    </button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "AToDo",
  //声明接收todo对象
  props: ["todo"],
  methods: {
    handleCheck(id) {
      //通知App组件，id对应的done值取反
      this.$bus.$emit("checkTodo", id);
    },
    //删除
    requestDelete(id) {
      if (confirm("Sure Delete?")) {
        pubsub.publish("deleteTodo", id);
      }
    },
    //编辑
    requestEdit(todo) {
      console.log("点击编辑按钮");

      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
      this.$nextTick(function () {
        this.$refs.inputName.focus();
      });
    },
    //失去焦点时回调
    requestBlur(todo, e) {
      todo.isEdit = false;
      if (!e.target.value.trim()) {
        return alert("不能为空");
      }
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
    },
  },
};
</script> 

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #abbbc1;
}

li:hover button {
  display: block;
}
</style>