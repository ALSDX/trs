<template>
    <div class="todo__wrapper" v-if="activeTodos.length > 0">
        <p>task to do - {{ activeTodos.length }}</p>
        <div class="todo__item" v-for="todo in activeTodos" :key="todo.id" :class="{ done: todo.done, active: !todo.done }" @click="$emit('toggle-todo', todo)">
            <p>{{ todo.title }}</p>
        </div>
    </div>
    <div class="todo__wrapper" v-else>
        <p>active</p>
        <div>
            <p style="opacity: .7; font-size: 14px;">no active tasks...</p>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        activeTodos: {
            type: Array,
            default: () => []
        }
    });
</script>

<style scoped>
  .todo__item.active {
    padding: 12px 14px;
  }
  .todo__item {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 7px 9px;
    border-radius: 7px;
    background-color: #15101C;
      p {
        flex: 1;
      }
      button {
        background: none;
        border: none;
        text-decoration: none;
        cursor: pointer;
        padding: 5px;
      }
  }
  .todo__wrapper {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
</style>