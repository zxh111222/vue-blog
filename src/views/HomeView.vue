<script setup>
let blogs = [
  {
    id: 1,
    title: 'vue 入门',
    content: '这里讲解了关于 vue 的入门'
  },
  {
    id: 2,
    title: 'vue 进阶',
    content: '这里讲解了关于 vue 的进阶'
  },
  {
    id: 3,
    title: 'vue 高级',
    content: '这里讲解了关于 vue 的高级'
  }
]
</script>

<template>
  <div v-for="blog in blogs" :key="blog.id">
    <h1>{{ blog.title }}</h1>
    <div>{{ blog.content }}</div>
  </div>
</template>

<style scoped>

</style>
