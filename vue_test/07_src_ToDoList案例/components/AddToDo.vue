<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="searchInput"
      @keyup.enter="addNew"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "AddToDo",
  props: ["addTodo"],
  data() {
    return {
      searchInput: "",
    };
  },
  methods: {
    addNew() {
      //校验输入不为空
      if (!this.searchInput) return alert("输入不能为空");
      //包装用户输入为一个对象
      const todoObj = { id: nanoid(), name: this.searchInput, done: false };
      //通知App组件去添加todo对象
      this.addTodo(todoObj);
      //清空输入内容
      this.searchInput = "";
    },
  },
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>