<template>
    <div class="todo__tasks-container">
        <div v-if="activeTodos.length > 0" class="todo__wrapper">
            <p>Tasks to do - {{ activeTodos.length }}</p>
            <TodoItem 
                v-for="todo in activeTodos" 
                :todo="todo" 
                :key="todo.id"
                @toggle-todo="$emit('toggle-todo', todo)"
            />
        </div>
        <div v-else class="todo__wrapper empty">
            <p>Active</p>
            <div>
                <p class="todo__empty-message">No active tasks...</p>
            </div>
        </div>
        <div v-if="doneTodos.length > 0" class="todo__wrapper">
            <p>Done - {{ doneTodos.length }}</p>
            <TodoItem
                v-for="todo in doneTodos"
                :todo="todo"
                :key="todo.id" 
                @toggle-todo="$emit('toggle-todo', todo)" 
                @remove-todo="$emit('remove-todo', todo)" 
            />
        </div>
        <div v-else class="todo__wrapper empty">
            <p>Done</p>
            <div>
                <p class="todo__empty-message">Nothing...</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import TodoItem from "@/components/TodoItem.vue";
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
    height: 330px;
    gap: 40px;
    flex-direction: column;
    justify-content: space-between;
  }
  .todo__wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .todo__wrapper.empty {
    gap: 5px;
  }
  .todo__empty-message {
    opacity: .7;
    font-size: 14px;
  }
</style>