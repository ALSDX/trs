<template>
  <div class="container">
    <div class="app__container">
      <AddTask @add-todo="addTodo"></AddTask>
      <TodosContainer :activeTodos="activeTodos" :doneTodos="doneTodos" @toggle-todo="toggleTodo" @remove-todo="removeTodo"></TodosContainer>
    </div>
  </div>
</template>

<script setup>
import AddTask from "@/components/AddTask.vue";
import TodosContainer from "@/components/TodosContainer.vue";
  import {ref, computed} from 'vue';

  const todos = ref([]);

  const addTodo = (title) => {
    if (title.trim()) {
      const todo = {
        title,
        id: Date.now(),
        done: false
      }
      todos.value.push(todo);
    }
  }

  const toggleTodo = (todo) => {
    todo.done = !todo.done
  }

  const removeTodo = (todo) => {
    todos.value = todos.value.filter((t) => t.id !== todo.id)
  }

  const activeTodos = computed(() => todos.value.filter((todo) => !todo.done));
  const doneTodos = computed(() => todos.value.filter((todo) => todo.done));
</script>

<style scoped>
  .container {
    background-color: #0D0714;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .app__container {
    background-color: #1D1825;
    min-width: 20%;
    min-height: 50%;
    padding: 25px 30px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: white;
    font-size: 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
</style>