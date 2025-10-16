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
            <PlusIcon />
        </button>
  </div>
</template>

<script setup lang="ts">
    import PlusIcon from '@/assets/icons/PlusIcon.vue';
    import {ref} from 'vue'

    const emit = defineEmits<{
      (e: 'add-todo', value: string)
    }>()

    const addTodoInputValue = ref<string>("");

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
    height: 34px;
    padding: 8px 8px;
    border-radius: 10px;
    outline: none;
    border: 1px solid #9e78cf;
    background: none;
    color: white;
    transition: all .4s ease;
  }
  .add-task__input:focus {
    border: 1px solid #8a44e6;
  }
  .add-task__btn {
    width: 34px;
    height:34px;
    padding: 4px 4px 0px;
    border: 1px solid #9e78cf;
    border-radius: 10px;
    border: none;
    outline: none;
    background: #9e78cf;
    cursor: pointer;
    color: white;
  }
</style>