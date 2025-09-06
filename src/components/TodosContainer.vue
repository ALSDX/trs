<template>
    <div class="todo__tasks-container">
        <ActiveTodos :activeTodos="activeTodos" @toggle-todo="todo => $emit('toggle-todo', todo)"></ActiveTodos>
        <DoneTodos :doneTodos="doneTodos" @toggle-todo="todo => $emit('toggle-todo', todo)" @remove-todo="todo => $emit('remove-todo', todo)"></DoneTodos>
    </div>
</template>

<script setup>
import ActiveTodos from '@/components/ActiveTodos.vue';
import DoneTodos from "@/components/DoneTodos.vue";
    const props = defineProps({
        activeTodos: {
            type: Array,
            default: () => []
        },
        doneTodos: {
            type: Array,
            default: () => []
        }
    });
</script>

<style scoped>
  .todo__tasks-container {
    display: flex;
    flex: 1;
    gap: 10px;
    flex-direction: column;
    justify-content: space-between;
  }
</style>