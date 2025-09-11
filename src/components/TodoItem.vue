<template>
    <div 
        :class="{ done: todo.done, active: !todo.done }" 
        class="todo__item" 
        @click="$emit('toggle-todo', todo)"
    >
        <p class="todo__text-title">{{ todo.title }}</p>
        <button v-if="todo.done" class="todo__remove-btn" @click.stop="$emit('remove-todo', todo)">
            <img class="todo__btn-img" src="@/assets/images/trash.svg" alt="trash img">
        </button>
    </div>
</template>


<script setup>
    const props = defineProps({
        todo: {
            type: Object,
            required: true
        }
    })
</script>

<style scoped>
  .todo__item.active {
    padding: 18px 16px;
  }
  .todo__item.done {
    padding: 13px 16px;
  }
  .todo__item.done p {
    text-decoration: line-through;
    color: #78CFB0;
  }
  .todo__item {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 18px 16px;
    border-radius: 7px;
    background-color: #15101C;
    color: #9E78CF;
  }
  .todo__text-title {
    flex: 1;
  }
  .todo__remove-btn {
    background: none;
    border: none;
    text-decoration: none;
    cursor: pointer;
    padding: 5px;
  }
  .todo__btn-img {
    fill: #9E78CF;
  }
</style>