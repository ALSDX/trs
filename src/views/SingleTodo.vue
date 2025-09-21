<template>
    <div class="app-todo__container">
        <div class="todo__item">
            <p class="todo__text-title" @click="navigateTodo">Todo with id - {{ todoId }}</p>
        </div>
    </div>
</template>

<script setup>
  import { useRoute, useRouter } from 'vue-router';

  const route = useRoute();
  const router = useRouter();
  
  const todoId = route.params.id;

  const navigateTodo = () => {
    router.push({path: `/todos`});
  }
</script>

<style scoped>
  .todo__item {
    padding: 21px 19px;
    border-radius: 10px;
    background-color: #15101C;
    color: #9E78CF;
  }
  .todo__text-title {
    flex: 1;
    cursor: pointer;
  }
</style>