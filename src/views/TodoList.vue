<template>
    <div class="app-todo__container">
      <AddTask class="add-task__fixed" @add-todo="addTodo" />
      <div class="todos__scrollable">
        <Todos 
          :activeTodos="activeTodos" 
          :doneTodos="doneTodos" 
          @toggle-todo="toggleTodo" 
          @remove-todo="removeTodo"
          @navigate-todo="navigateTodo"
        />
      </div>
    </div>
</template>

<script setup>
  import { getTodos } from "@/api/todo/getTodos";
  import AddTask from "@/components/AddTask.vue";
  import Todos from "@/components/Todos.vue";
  import {ref, computed, onMounted} from 'vue';
  import { useRouter } from "vue-router";

  const todos = ref([]);

  const router = useRouter();

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

  const navigateTodo = (id) => {
    router.push({path: `/todos/${id}`});
  }

  const activeTodos = computed(() => todos.value.filter((todo) => !todo.done));
  const doneTodos = computed(() => todos.value.filter((todo) => todo.done));

  onMounted(async () => {
    const rawTodos = await getTodos();

    todos.value = rawTodos.map((todo) => ({
      ...todo,
      done: false
    }));
  })
</script>

<style scoped>
  .add-task__fixed {
    position: sticky;
    top: 0;
    z-index: 1;
    background: #1D1825;
  }
  .todos__scrollable {
    max-height: 550px;
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .todos__scrollable::-webkit-scrollbar {
    display: none;
  }
</style>