<script setup>
import {RouterView} from 'vue-router'
import {usePostStore} from "@/stores/posts.js";

let postsStore = usePostStore();

postsStore.getPosts()
</script>

<template>
  <header>
    <nav>
      <div>
        <RouterLink to="/" class="nav-link">首页</RouterLink>
        <RouterLink to="/post-create" class="nav-link">创建博客</RouterLink>
      </div>
      <div>
        <RouterLink to="/about" class="nav-link">关于</RouterLink>
        <RouterLink to="/resume" class="nav-link">简历</RouterLink>
      </div>
    </nav>
  </header>

  <RouterView/>
</template>

<style lang="scss" scoped>
nav {
  padding: 1rem 2rem;
  background: #1e40af;
  border-bottom: 1px solid #60a5fa;
  display: flex;
  justify-content: space-between;

  .nav-link {
    color: #fff;
    padding: 5px 15px;
    transition: all 0.2s ease-in-out;
    margin-right: 1rem;

    &:hover {
      background: #60a5fa;
    }
  }
}
</style>
