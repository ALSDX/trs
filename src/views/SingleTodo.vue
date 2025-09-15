<template>
    <div class="app-todo__container">
        <div class="todo__item">
            <p class="todo__text-title" @click="$router.push('/todos')">Todo with id - {{ $route.params.id }}</p>
        </div>
    </div>
</template>

<script setup>

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