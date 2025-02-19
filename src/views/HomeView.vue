<script setup>
import PostItem from "@/components/PostItem.vue";
import MyWrapper from "@/components/MyWrapper.vue";
import { usePostStore } from "@/stores/posts.js";

let postsStore = usePostStore();
</script>

<template>

  <div v-for="blog in postsStore.posts" :key="blog.id">
    <MyWrapper>
      <PostItem :blog='blog' />
    </MyWrapper>
  </div>
</template>

<style scoped>

</style>
