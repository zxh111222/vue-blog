<script setup>
import PostItem from "@/components/PostItem.vue";
import MyWrapper from "@/components/MyWrapper.vue";
import { getPosts } from "@/api/post.js";
import { onMounted, ref } from "vue";

const postList = ref([])

function getPostList(){
  getPosts()
    .then((res) => {
      postList.value = res.data.posts
    })
    .catch(error => console.log(error))
}

// 在组件加载时会调用这个方法
onMounted(() => {
  getPostList()
})
</script>

<template>

  <div v-for="blog in postList" :key="blog.id">
    <MyWrapper>
      <PostItem :blog='blog' />
    </MyWrapper>
  </div>
</template>

<style scoped>

</style>
