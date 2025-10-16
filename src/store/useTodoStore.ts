import { getTodos } from "@/api/todo/getTodos";
import { Todo } from "@/types/todo";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>([]);

  const addTodo = (title: string) => {
    if (title.trim()) {
      const todo: Todo = {
        title,
        id: Date.now(),
        done: false
      }
      todos.value.push(todo);
    }
  }

  const toggleTodo = (todo: Todo) => {
    todo.done = !todo.done
  }

  const removeTodo = (todo: Todo) => {
    todos.value = todos.value.filter((t) => t.id !== todo.id)
  }

  const activeTodos = computed(() => todos.value.filter((todo) => !todo.done));
  const doneTodos = computed(() => todos.value.filter((todo) => todo.done));

  async function fetchTodos() {
    const rawTodos = await getTodos<Todo[]>();

    todos.value = rawTodos.map((todo: Omit<Todo, 'done'>) => ({
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