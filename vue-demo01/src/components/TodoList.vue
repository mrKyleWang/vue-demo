<template>
  <div>
    <input type="text" v-model="input" @keyup="add($event)">
    <button @click="add(null)">+增加</button>
    <h2>进行中</h2>
    <ul>
      <li v-for="(item,key) in list" v-if="!item.checked">
        <input type="checkbox" v-model="item.checked" @change="saveList">
        {{item.title}}
        <button @click="remove(key)">-</button>
      </li>
    </ul>
    <h2>已完成</h2>
    <ul>
      <li v-for="(item,key) in list" v-if="item.checked">
        <input type="checkbox" v-model="item.checked" @change="saveList">
        {{item.title}}
        <button @click="remove(key)">-</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      input: "",
      list: []
    };
  },
  methods: {
    add(e) {
      if ((e == null || e.keyCode == 13) && this.input != "") {
        this.list.push({
          title: this.input,
          checked: false
        });
        this.input = "";
      }
      localStorage.setItem("list", JSON.stringify(this.list));
    },
    remove(key) {
      this.list.splice(key, 1);
      localStorage.setItem("list", JSON.stringify(this.list));
    },
    saveList() {
      localStorage.setItem("list", JSON.stringify(this.list));
    }
  },
  mounted() {
    var list = JSON.parse(localStorage.getItem("list"));
    if (list) {
      this.list = list;
    }
  }
};
</script>