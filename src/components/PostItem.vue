<script setup>
  defineProps(['blog'])
</script>

<template>
  <div class="post">
    <h1>{{ blog.title }}</h1>
    <div>{{ blog.content }}</div>
  </div>
</template>

<style scoped>

</style>
