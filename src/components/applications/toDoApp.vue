<script>
import { capitalize } from "vue";
import CrossBtn from "../ui/buttons/crossBtn.vue";
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      newTodo: "",
      todos: [],
    };
  },

  components: {
    CrossBtn,
  },

  computed: {
    ...mapState(["currentApplication"]),
    disableButton() {
      return this.newTodo == "";
    },

    isOnlyNumbres() {
      return this.newTodo == +this.newTodo;
    },
  },

  methods: {
    ...mapMutations(["closeApp"]),
    addNewTodo() {
      this.todos.push(capitalize(this.newTodo));
      this.newTodo = "";
    },

    deleteTodo(todoDeleteIndex) {
      this.todos.splice(todoDeleteIndex, 1);
    },
  },
};
</script>

<template>
  <CrossBtn :color="'black'" :crossBtnFunction="closeApp" />
  <div class="to-do-app">
    <div class="new-todo">
      <input v-model="newTodo" type="text" placeholder="Insert todo text" />

      <button
        @click="addNewTodo"
        class="todo-add"
        :disabled="(disableButton, isOnlyNumbres)"
      >
        +
      </button>
    </div>
    <h1 class="title">Todo list:</h1>
    <div class="todo-list">
      <div class="todo" v-for="(todo, index) in todos" :key="index">
        <p class="todo-text">{{ index + 1 }}. {{ todo }}</p>
        <button class="delete-btn" @click="deleteTodo(index)">X</button>
      </div>
    </div>
  </div>
</template>

<style>
.to-do-app {
  width: 85%;
  height: 85%;

  margin: auto;
}

.new-todo {
  display: flex;
  justify-content: center;
  width: 100%;
}

.title {
  margin: 0;
  margin: 5%;
  text-align: center;
  font-size: 24px;
}

.todo-list {
  max-height: 65%;
  scrollbar-gutter: stable;
  overflow-y: auto;
}

.todo {
  display: flex;
  align-items: center;
  width: 90%;
  margin-left: auto;
  margin-top: 2%;
}

.todo-text {
  width: 80%;
  margin: 2%;

  font-size: 20px;
  word-break: break-all;
}

.delete-btn {
  height: 100%;
}
</style>
