<template>
    <div class="app-todo__container">
        <div class="todo__item">
            <p class="todo__text-title" @click="navigateTodo">{{ todo.title }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
  import { getTodo } from '@/api/todo/getTodo';
  import { Todo } from '@/types/todo';
  import { onMounted, reactive } from 'vue';
  import { useRoute, useRouter } from 'vue-router';

  const route = useRoute();
  const router = useRouter();

  interface SingleTodo {
    id?: number;
    title?: string;
    done?: boolean;
  }
  
  const todo = reactive<SingleTodo>({});

  const todoId = route.params.id;

  const navigateTodo = () => {
    router.push({path: `/todos`});
  }

  onMounted( async() => {
    const newTodo = await getTodo<Todo>(todoId);

    Object.assign(todo, newTodo)
  })
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