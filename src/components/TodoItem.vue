<template>
    <div 
        :class="{ done: todo.done }" 
        class="todo__item" 
    >
        <p class="todo__text-title">{{ todo.title }}</p>
        <button class="todo__btn" @click="$emit('toggle-todo', todo)">
            <CheckMarkIcon />
        </button>
        <button class="todo__btn" @click="$emit('remove-todo', todo)">
            <TrashIcon />
        </button>
    </div>
</template>


<script setup>
    import CheckMarkIcon from '@/assets/icons/CheckMarkIcon.vue';
    import TrashIcon from '@/assets/icons/TrashIcon.vue';
    
    const props = defineProps({
        todo: {
            type: Object,
            required: true
        }
    })
</script>

<style scoped>
  .todo__item.done {
    padding: 16px 18px;
  }
  .todo__item.done .todo__text-title {
    text-decoration: line-through;
    color: #78CFB0;
  }
  .todo__item {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 21px 19px;
    border-radius: 10px;
    background-color: #15101C;
    color: #9E78CF;
  }
  .todo__text-title {
    flex: 1;
  }
  .todo__btn {
    background: none;
    border: none;
    text-decoration: none;
    cursor: pointer;
    padding: 5px;
  }
</style>