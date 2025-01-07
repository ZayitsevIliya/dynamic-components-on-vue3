<script>
import { capitalize } from "vue";
import { mapState } from "vuex";
import CloseAppBtn from "@/components/ui/buttons/CloseAppBtn.vue";

export default {
  data() {
    return {
      newTodo: "",
      todos: [],
    };
  },

  components: {
    CloseAppBtn,
  },

  computed: {
    ...mapState([
      "currentApplication",
      "currentFont",
      "fontSize",
      "currentLanguage",
    ]),
    disableButton() {
      return this.newTodo == "";
    },

    isOnlyNumbres() {
      return this.newTodo == +this.newTodo;
    },
  },

  methods: {
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
  <CloseAppBtn />
  <div class="to-do-app">
    <div class="new-todo">
      <input
        v-model="newTodo"
        type="text"
        :placeholder="currentLanguage.applications.todo.placeholder"
      />

      <button
        @click="addNewTodo"
        class="todo-add"
        :disabled="(disableButton, isOnlyNumbres)"
      >
        +
      </button>
    </div>
    <h1 class="title">{{ currentLanguage.applications.todo.title }}:</h1>
    <div class="todo-list">
      <div
        :class="['todo', this.currentFont, this.fontSize]"
        v-for="(todo, index) in todos"
        :key="index"
      >
        <p class="todo-text">{{ index + 1 }}. {{ todo }}</p>
        <button class="delete-btn" @click="deleteTodo(index)">X</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  word-break: break-all;
}

.delete-btn {
  height: 100%;
}
</style>
