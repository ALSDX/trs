<template>
    <div class="todo__tasks-container">
        <div v-if="props.activeTodos.length > 0" class="todo__wrapper">
            <p>Tasks to do - {{ props.activeTodos.length }}</p>
            <TodoItem 
                v-for="todo in props.activeTodos" 
                :todo="todo" 
                :key="todo.id"
                @toggle-todo="$emit('toggle-todo', todo)"
                @remove-todo="$emit('remove-todo', todo)"
                @navigate-todo="$emit('navigate-todo', todo.id)"
            />
        </div>
        <div v-else class="todo__wrapper empty">
            <p>Active</p>
            <div>
                <p class="todo__empty-message">No active tasks...</p>
            </div>
        </div>
        <div v-if="props.doneTodos.length > 0" class="todo__wrapper">
            <p>Done - {{ props.doneTodos.length }}</p>
            <TodoItem
                v-for="todo in props.doneTodos"
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

<script setup lang="ts">
    import TodoItem from "@/components/TodoItem.vue";
    import { Todo } from "@/types/todo";

    const props = withDefaults(
        defineProps<{
            activeTodos?: Todo[]
            doneTodos?: Todo[]
        }>(),
        {
            activeTodos: () => [],
            doneTodos: () => []
        }
    )
</script>

<style scoped>
  .todo__tasks-container {
    display: flex;
    height: 500px;
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
  }
</style>