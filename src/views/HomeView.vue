<script setup>
let blog = {
  title: 'vue 入门',
  content: '这里讲解了关于 vue 的入门'
}</script>

<template>
  <div>
    <h1>{{ blog.title }}</h1>
    <div>{{ blog.content }}</div>  </div>
</template>

<style scoped>

</style>
