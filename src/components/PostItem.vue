<script setup>
import { usePostStore } from "@/stores/posts.js";

let postsStore = usePostStore();

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
        <button @click="postsStore.deletePost(blog.id)">删除</button>
        <button>收藏</button>
      </div>
    </div>
    <h1>{{ blog.title }}</h1>
    <div>{{ blog.content }}</div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  font-size: 12px;
  background: #0284c7;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-weight: 300;

  button {
    border-radius: 30px;
  }

  div .del {
    font-size: 20px;
    padding: 3px;
    background: #fff;
    color: #ef4444;
  }

  div .save {
    font-size: 20px;
    padding: 3px;
    background: #fff;
    color: #22c55e;
    margin-left: 10px;
  }
}

h1 {
  padding: 1rem;
}

p {
  padding: 0 1rem 1rem;
  font-weight: 300;
}
</style>
