<template>
    <div class="todo__wrapper" v-if="doneTodos.length > 0">
        <p>done - {{ doneTodos.length }}</p>
        <div class="todo__item" v-for="todo in doneTodos" :key="todo.id" :class="{ done: todo.done, active: !todo.done }" @click="$emit('toggle-todo', todo)">
            <p>{{ todo.title }}</p>
            <button @click.stop="$emit('remove-todo', todo)">🗑️</button>
        </div>      
    </div>
    <div class="todo__wrapper" v-else>
        <p>done</p>
        <div>
            <p style="opacity: .7; font-size: 14px; ">nothing...</p>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        doneTodos: {
            type: Array,
            default: () => []
        }
    })
</script>

<style scoped>
  .todo__item.done p {
    text-decoration: line-through;
    color: rgb(57, 198, 78);
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