<script setup>
import {usePostStore} from "@/stores/posts.js";
import {ref} from "vue";

let postsStore = usePostStore();

const props = defineProps({
  blog: {
    type: Object,
    required: true
  }
});

const isEditing = ref(false)

const editedPost = ref(null)

function startEdit() {
  isEditing.value = true;
  editedPost.value = {...props.blog}
}

function cancelEdit() {
  isEditing.value = false;
  editedPost.value = null;
}

function handleEdit() {
  if (editedPost.value) {
    // 调方法
    postsStore.editPost(editedPost.value);

    isEditing.value = false;
    editedPost.value = null;
  }
}
</script>

<template>
  <div>
    <div class="edit-form" v-if="isEditing">
      编辑表单
      <form>
        <input type="text" required v-model="editedPost.title">
        <br>
        <br>
        <textarea required v-model="editedPost.content"></textarea>
        <br>
        <button type="button" @click="cancelEdit">取消</button>
        |
        <button type="submit" @click="handleEdit">修改</button>
      </form>
    </div>
    <div class="post">
      <div class="header">
        <span>作者：{{ blog.author }} 发布于：{{ blog.created_at }}</span>
        <div>
          <button @click="postsStore.deletePost(blog.id)">删除</button>
          <button @click="startEdit">编辑</button>
        </div>
      </div>
      <h1>{{ blog.title }}</h1>
      <div class="content">{{ blog.content }}</div>
    </div>
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

.content {
  padding: 1rem;
}

.edit-form {
  position: fixed;
  top: 50%;
  left: 50%;
  background: #eeeeee;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 500px;
  z-index: 1000;
}
</style>
