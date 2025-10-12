import { getTodos } from "@/api/todo/getTodos";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useTodoStore = defineStore('todo', () => {
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

  async function fetchTodos() {
    const rawTodos = await getTodos();

    todos.value = rawTodos.map((todo) => ({
      ...todo,
      done: false
    }));
  }

  return {
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
    activeTodos,
    doneTodos,
    fetchTodos
  }
})