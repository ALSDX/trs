<template>
    <div class="todo__add-task">
        <input 
            v-model="addTodoInputValue" 
            class="add-task__input" 
            placeholder="Add a new task" 
            type="text" 
            maxlength="30"
        >
        <button class="add-task__btn" @click="addTodo">
            <img class="vector" src="../../public/Vector.svg" alt="vector">
        </button>
  </div>
</template>

<script setup>
    import {ref} from 'vue'

    const emit = defineEmits(['add-todo']);

    const addTodoInputValue = ref("");

    const addTodo = () => {
        if (addTodoInputValue.value.trim()) {
            emit('add-todo', addTodoInputValue.value.trim());
            addTodoInputValue.value = ""
        }
    }
</script>

<style scoped>
  .todo__add-task {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
  }
      .add-task__input {
        flex: 1;
        padding: 8px 8px;
        border-radius: 7px;
        outline: none;
        border: 2px solid #9e78cf;
        background: none;
        font-size: 12px;
        color: white;
        transition: all .4s ease;
      }
      .add-task__input:focus {
        border: 2px solid #8a44e6;
      }
      .add-task__btn {
        padding: 2px 5px;
        border-radius: 5px;
        border: none;
        outline: none;
        background: #9e78cf;
        cursor: pointer;
        color: white;
      }
      .vector {
        width: 24px;
        height: 24px;
        fill: white;
      }
</style>