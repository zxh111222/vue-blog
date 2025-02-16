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
    <div class="header">
      <span>作者: {{ blog.author }} 发布于: {{ blog.created_at }}</span>
      <div>
        <button>删除</button>
        <button>收藏</button>
      </div>
    </div>
    <h1>{{ blog.title }}</h1>
    <div>{{ blog.content }}</div>
    <hr>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}
</style>
