<script setup>
defineProps({
  blog: {
    type: Object,
    required: true,
  }
})
</script>

<template>
  <div class="post">
    <h1>{{ blog.title }}</h1>
    <div>{{ blog.content }}</div>
    <div>
      <button>删除</button>
      <button>收藏</button>
    </div>
    <hr>
  </div>
</template>

<style scoped>

</style>
