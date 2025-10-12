<template>
    <div class="app-todo__container">
      <AddTask class="add-task__fixed" @add-todo="todoStore.addTodo" />
      <div class="todos__scrollable">
        <Todos 
          :activeTodos="todoStore.activeTodos" 
          :doneTodos="todoStore.doneTodos" 
          @toggle-todo="todoStore.toggleTodo" 
          @remove-todo="todoStore.removeTodo"
          @navigate-todo="navigateTodo"
        />
      </div>
    </div>
</template>

<script setup>
  import AddTask from "@/components/AddTask.vue";
  import Todos from "@/components/Todos.vue";
  import { useTodoStore } from "@/store/useTodoStore";
  import {onMounted} from 'vue';
  import { useRouter } from "vue-router";

  const todoStore = useTodoStore();

  const router = useRouter();

  const navigateTodo = (id) => {
    router.push({path: `/todos/${id}`});
  }

  onMounted(() => {
    todoStore.fetchTodos()
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